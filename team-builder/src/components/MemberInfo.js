import React from 'react';

const MemberInfo = ({ member, editMember }) => {
    const { name, email, role } = member;

    const editInfo = e => {
        e.preventDefault();
        editMember(member);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
            <button onClick={editInfo}>Edit info</button>
        </div>
    );
}

export default MemberInfo;