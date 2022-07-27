import React, {useEffect, useRef, useState} from "react";
import Swal from "sweetalert2";

const Add = ({employees, setEmployees, setIsAdding}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if(!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: "Error",
                text: 'All fields are required',
                showCancelButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id, firstName, lastName,
            email, salary, date
        }

        employees.push(newEmployee);
    }
  return (
    <div>Add</div>
  )
}

export default Add