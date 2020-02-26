import React from 'react'

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

const MembersList = ({ members }) => {
    return (
        <div>
            <h1>Members List</h1>
            { members.map((member, i) => <MemberInfo member={member} key={i} />) }
        </div>
    )
}



export default MembersList
