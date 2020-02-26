import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import MembersList from './components/MembersList';

function App() {
  const [members, setMembers] = useState([]);
  
  const addMember = ({ name, email, role }) => {
    setMembers([...members, {
      name,
      email,
      role
    }]);
  }

  return (
    <Fragment>
      <h1>App</h1>
      <MembersList members={members} />
      <Form addNewMember={addMember} />
    </Fragment>
  );
}

export default App;
