import React, {useState} from 'react'
import Swal from 'sweetalert2'
import Header from './Header'
import List from './List'
import Add from './Add'
import Edit from './Edit'

import { residentsData } from '../../data';

const Dashboard = () => {

    const [residents, setResidents] = useState(residentsData);
    const [selectedResident, setSelectedResident] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [resident] = residents.filter(resident => resident.id === id);

        setSelectedResident(resident);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        }).then(result => {
            if(result.value) {
                const [resident] = residents.filter(resident => resident.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted',
                    text: `${resident.firstName} ${resident.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setResidents(resident.filter(resident => resident.id !== id));
            }
        });
    }

  return (
    <div className='container'>
        {/* Render List */}
        {!isAdding && !isEditing && (
            <>
                <Header
                    setIsAdding={setIsAdding}
                />
                <List
                    residents={residents}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
             </>
        )}

        {/* Add form */}
        {isAdding && (
            <Add 
            residents={residents}
            setResidents={setResidents}
            setIsEditing={setIsEditing} 
            />
        )}
        {/* Edit */}
        {isEditing && (
            <Edit
                residents={residents}
                selectedResident={selectedResident}
                setResidents={setResidents}
                setIsEditing={setIsEditing}
            />
            )}
    </div>
  )
}

export default Dashboard