import React, {useEffect, useRef, useState} from "react";
import Swal from "sweetalert2";

const Add = ({employees, setEmployees, setIsAdding}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);
  return (
    <div>Add</div>
  )
}

export default Add