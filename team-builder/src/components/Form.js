import React, { useState, useEffect } from 'react'

const Form = ({ addNewMember, memberToEdit, updateMemberInfo, clearMemberToEdit }) => {
    const newMemberObj = {
        name: '',
        email: '',
        role: '',
        id: ''
    }
    const [member, setMember] = useState(newMemberObj);

    useEffect(() => {
        if(memberToEdit) {
            setMember(memberToEdit);
        }
    }, [memberToEdit]);

    const handleChanges = e => {
        setMember({...member, 
           [e.target.id]: e.target.value
        });
    }

    const submitForm = e => {
        e.preventDefault();
        if(memberToEdit) {
            updateMemberInfo(member);
        } else {
            addNewMember(member); 
        }
         
        clearMemberToEdit();  
        setMember(newMemberObj)
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name:</label>
            <input id='name' type='text' onChange={handleChanges} value={ member.name } />
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' onChange={handleChanges} value={member ? member.email : ''} />
            <label htmlFor='role'>Role:</label>
            <input id='role' type='text' onChange={handleChanges} value={member ? member.role : ''} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form
