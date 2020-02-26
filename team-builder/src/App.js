import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import MembersList from './components/MembersList';

function App() {
  const [members, setMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState();

  const addMember = ({ name, email, role, id }) => {
    setMembers([...members, {
      name,
      email,
      role,
      id: members.length + 1
    }]);
  }

  const updateMemberInfo = memberToUpdate => {
    setMembers(currentMembers => 
      currentMembers.map(element => 
        element.id === memberToUpdate.id ? 
        { ...element, 
          name: memberToUpdate.name,
          email: memberToUpdate.email,
          role: memberToUpdate.role
        } 
        : 
        element
      )
    );
  }

  
  const editMember = (member) => {
    setMemberToEdit(member);
  }

  const clearMemberToEdit = () => {
    setMemberToEdit();
  }

  return (
    <Fragment>
      <h1>App</h1>
      <MembersList members={members} editMember={editMember} />
      <Form 
        addNewMember={addMember} 
        memberToEdit={memberToEdit} 
        clearMemberToEdit={clearMemberToEdit} 
        updateMemberInfo={updateMemberInfo} 
      />
    </Fragment>
  );
}

export default App;
