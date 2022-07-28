import React, {useState} from 'react';
import Swal from 'sweetalert2';

const Edit = ({ residents, selectedResident, setResidents, setIsEditing }) => {

  const id = selectedResident.id;

  const [firstName, setFirstName] = useState(selectedResident.firstName);
  const [lastName, setLastName] = useState(selectedResident.lastName);
  const [email, setEmail] = useState(selectedResident.email);    const [salary, setSalary] = useState(selectedResident.salary);
  const [date, setDate] = useState(selectedResident.date);

  const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const resident = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        };

        for (let i = 0; i < residents.length; i++) {
            if (residents[i].id === id) {
                residents.splice(i, 1, resident);
                break;
            }
        }

        setResidents(residents);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${resident.firstName} ${resident.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };
    
  return (
     <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Resident</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="salary">Salary ($)</label>
                <input
                    id="salary"
                    type="number"
                    name="salary"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    )
}

export default Edit