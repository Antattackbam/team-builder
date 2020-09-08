import React from 'react';
import styled from 'styled-components';

const TeamDiv = styled.div`
    margin-top: 10px;
    border-radius: 20px;
    width: 600px;
    height: auto;
    padding: 30px;
    background: black;
    color: #348cbf ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: .7;
`;

const Member = styled.div`
    background: #a7aaab;
    opacity: 1;
    border-radius: 30px;
    width: 100%;
    margin: 5px;
    text-align: center;
`;

const P = styled.p`
    color:#348cbf;
    font-size: 12px;
    font-family: sans-seriff;
`;

const TeamCard = props => {
    console.log(props);
    return(

        <TeamDiv>       
            {props.teamMember.map(team => (
                <Member>
                <h2 key={team.id}>{team.name}</h2>
                <P>{team.email}</P>
                <P>{team.role}</P>
                </Member>
            ))}
        </TeamDiv>

    )
}

export default TeamCard; 