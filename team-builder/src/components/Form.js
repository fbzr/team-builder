import React, { useState } from 'react'

const Form = ({ addNewMember }) => {
    const newMemberObj = {
        name: '',
        email: '',
        role: ''
    }
    const [newMember, setNewMember] = useState(newMemberObj)

    const handleChanges = e => {
        setNewMember({...newMember, 
           [e.target.id]: e.target.value
        });
    }

    const submitForm = e => {
        e.preventDefault();
        addNewMember(newMember);
        setNewMember(newMemberObj);
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name:</label>
            <input id='name' type='text' onChange={handleChanges} value={newMember.name} />
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' onChange={handleChanges} value={newMember.email} />
            <label htmlFor='role'>Role:</label>
            <input id='role' type='text' onChange={handleChanges} value={newMember.role} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form
