import React, {useState} from 'react';
import './App.css';
import Form from './component/Form';
import TeamCard from './component/TeamCard';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: center;
  font-size: 70px;
  font-family: Ariel;
  color: #43baa6;
  background: teal;
  opacity: .9;
  margin: 0;
  border-radius: 2px;
  padding-top: 0;
`;

const Desc = styled.div`
  display: flex;
  font-size: 20px;
  font-family: sans-seriff;
  color: white;
  opacity: .89;
  margin-top: 10px;
  padding: 10px;
  margin-bottom: 20px;
`;


function App() {

  const [teamMember, setTeamMember] = useState([
    {
      name: 'Ant',
      email: 'example@email.com',
      role: "Creator"
    }
  ])

  const addNewMember = member => {
    const newteamMember =  setTeamMember([...teamMember, member]);
  };
  return (
    <div className="App-header">
      <Header>Eerie Anthill</Header>
      <Desc>Fill out the form below.</Desc>
      <div className="FormBox">
        <Form addNewMember={addNewMember}/>
      </div>
      <TeamCard teamMember={teamMember}/>
    </div>
  );
}

export default App;