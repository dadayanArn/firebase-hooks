import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import firebase from '../../firebase';


const Register = () => {
  const [state, setState] = useState({ name: '', email: '', password: '' });
  const { name, email, password } = state; 
  let history = useHistory();

  const handleInputChange = (event) => {
    const { target: { name, value } } = event;
    setState({...state, [name]: value });
  }

  const onSubmit = () => {
    const { name, email, password } = state; 
    firebase.register(name, email, password )
      .then(response => {
        history.push('/login');
      })
      .catch((err) => {
        // Set error message here
      })
  }

  return (
    <div className="wrapper">
      <div className="contact">
        <input value={name} name="name" onChange={handleInputChange} type="text" placeholder='Name'/>
        <input value={email} name="email" onChange={handleInputChange} type="email" placeholder='Email'/>
        <input value={password} name="password" onChange={handleInputChange} type="password" placeholder="Password"/>
        <button onClick={onSubmit} name="submit" type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Register;