import React from 'react';
import MemberInfo from './MemberInfo';

const MembersList = ({ members }) => {
    return (
        <div>
            {members.length > 0 ? <h1>Members List</h1> : null}
            { members.map((member, i) => <MemberInfo member={member} key={i} />) }
        </div>
    )
}



export default MembersList
