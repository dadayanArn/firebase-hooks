import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import firebase from '../../firebase';

const Login = (props) => {
  let history = useHistory();
  const [state, setState] = useState({ email: '', password: '' });
  const { email, password } = state;

  const handleInputChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  }

  const onSubmit = () => {
    firebase.login(email, password)
      .then(response => {
        history.push('/links')
      })
      .catch((err) => {
        // set error message here
      })
  }

  const openRegister = (e) => {e.preventDefault()}
  
  return (
    <div className="wrapper">
      <div className="contact">
        <input value={email} onChange={handleInputChange} type="email" name="email" placeholder='Email'/>
        <input value={password} onChange={handleInputChange} type="password" name="password" placeholder="Password"/>
        <button onClick={onSubmit} name="submit" type="submit">Login</button>
        <a href="/" onClick={openRegister} title="Register">Register</a>
      </div>
    </div>
  );
};

export default Login;