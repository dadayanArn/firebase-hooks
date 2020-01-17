import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from "../../firebase";

const Links = () => {
  // let history = useHistory();
  const [state, setState] = useState({ description: '', url: '' });
  const { description, url } = state;

  const handleInputChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  }

  const onSubmit = () => {
    //...
  }
  return (
    <div className="wrapper">
    <div className="contact">
      <input value={description} onChange={handleInputChange} type="text" name="description" placeholder='Description'/>
      <input value={url} onChange={handleInputChange} type="url" name="url" placeholder="Url"/>
      <button onClick={onSubmit} name="submit" type="submit">Create</button>
    </div>
  </div>
  );
};

export default Links;