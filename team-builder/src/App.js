import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import MembersList from './components/MembersList';

function App() {
  const [members, setMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState();
  
  const addMember = ({ name, email, role }) => {
    setMembers([...members, {
      name,
      email,
      role
    }]);
  }

  
  const editMember = (member) => {
    setMemberToEdit(member);
  }

  return (
    <Fragment>
      <h1>App</h1>
      <MembersList members={members} editMember={editMember} />
      <Form addNewMember={addMember} memberToEdit={memberToEdit} />
    </Fragment>
  );
}

export default App;
