import React from 'react';
import MemberInfo from './MemberInfo';

const MembersList = ({ members, editMember }) => {
    return (
        <div>
            {members.length > 0 ? <h1>Members List</h1> : null}
            { members.map((member) => <MemberInfo member={member} key={member.id} editMember={editMember} />) }
        </div>
    )
}



export default MembersList
