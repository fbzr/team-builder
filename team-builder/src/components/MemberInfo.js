import React from 'react';

const MemberInfo = ({ member }) => {
    const { name, email, role } = member;
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
    );
}

export default MemberInfo;