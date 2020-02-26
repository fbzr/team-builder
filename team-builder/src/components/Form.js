import React from 'react'

const Form = ({ addMember }) => {
    return (
        <form>
            <label htmlFor='name'>Name:</label>
            <input id='name' type='text' />
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' />
            <label htmlFor='role'>Role:</label>
            <input id='role' type='text' />
        </form>
    )
}

export default Form
