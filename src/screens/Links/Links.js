import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
 import { FirebaseContext } from '../../firebase';

const Links = () => {
  let history = useHistory();
  const { user, firebase } = useContext(FirebaseContext)
  const [state, setState] = useState({ description: '', url: '' });
  const { description, url } = state;
  const handleInputChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  }

  const onSubmit = () => {
    const newLink = {
      description,
      url,
      created: Date.now(),
      postedBy: {
        id: user.uid,
        displayName: user.displayName
      },
      comments: [],
      votes: []
    };

    firebase.db.collection('links').add(newLink)
    .then(() => {
      history.push('/linklist')
    })
    .catch((err) => {
      console.log('ERROR WHILE CREATE LINK: ', err)
    })
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