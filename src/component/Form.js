import React, {useState} from 'react';
import styled from 'styled-components';

const FormDiv = styled.div`
    width: 800px;
    background: white;
    opacity: .9;
    padding: 20px;
    border-radius: 10px;
`;

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Label = styled.label`
    color: teal;
    font-size: 14px;
    text-align: center;
`;

const Input = styled.input`
    background: teal;
    color: white;
    height: 50px;
    width: 780px;
    margin: 5px;
`;

const Button = styled.button`
    height: 50px;
    margin-top: 20px;
    background: #348cbf;
    color: white;
`;

const Form = props =>{
const [form , setForm] = useState({
    name: "",
    email: "",
    role: ""

})

const handleChange= event => {
    setForm({
        ...form, 
        [event.target.name]: event.target.value});

};

const handleSubmit=event=>{
    event.preventDefault();
    const newForm = {  
        ...form,
        id: Date.now()
      };
        props.addNewMember(newForm)
        setForm({ name: "",
      email: "",
      role: ""})
}

return <FormDiv><FormStyled id="form" onSubmit={handleSubmit}>
        <Label>Name</Label> 
        <Input 
        placeholder="First and Last Name" 
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        />
        <Label>Email</Label> 
        <Input
        placeholder="Enter Email"
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}/>
        <Label>Role</Label> 
        <Input
        placeholder="What is your Role?"
        type="text"
        name="role"
        value={form.role}
        onChange={handleChange}/>
        <Button id="subbutton">Submit Member</Button>
        </FormStyled>
    </FormDiv>
}

export default Form; 