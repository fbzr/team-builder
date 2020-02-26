import React, { useState } from 'react'

const Form = ({ addNewMember }) => {
    const [newMember, setNewMember] = useState({
        name: '',
        email: '',
        role: ''
    })

    const handleChanges = e => {
        setNewMember({...newMember, 
           [e.target.id]: e.target.value
        });
    }

    const submitForm = e => {
        e.preventDefault();
        addNewMember(newMember);
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name:</label>
            <input id='name' type='text' onChange={handleChanges} />
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' onChange={handleChanges} />
            <label htmlFor='role'>Role:</label>
            <input id='role' type='text' onChange={handleChanges} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form
