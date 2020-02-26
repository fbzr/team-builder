import React, { useState, useEffect } from 'react'

const Form = ({ addNewMember, memberToEdit }) => {
    const [newMember, setNewMember] = useState();

    useEffect(() => {
        setNewMember(memberToEdit);
    }, [memberToEdit]);

    const handleChanges = e => {
        setNewMember({...newMember, 
           [e.target.id]: e.target.value
        });
    }

    const submitForm = e => {
        e.preventDefault();
        debugger
        addNewMember(newMember);
        setNewMember({
            name: '',
            email: '',
            role: ''
        });
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name:</label>
            <input id='name' type='text' onChange={handleChanges} value={newMember ? newMember.name : ''} />
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' onChange={handleChanges} value={newMember ? newMember.email : ''} />
            <label htmlFor='role'>Role:</label>
            <input id='role' type='text' onChange={handleChanges} value={newMember ? newMember.role : ''} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form
