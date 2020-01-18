import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from "../../firebase";
import { useHistory } from 'react-router-dom';


const LinkList = () => {
  const [links, setLinks] = useState([]);
  const history = useHistory();
  const { user, firebase } = useContext(FirebaseContext);

  const getLinks = async () => {
    // const snapshot = await firebase.db.collection('links').get();
    // const links = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    // setLinks(links)
    firebase.db.collection('links').onSnapshot((snapshot) => {
      const links = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setLinks(links)
    })
  }

  useEffect(() => {
    getLinks();
  }, [])

  const logout = () => {
    firebase.logout()
    .then(() => {
      history.push('/login')
    })
    .catch(() => {
      // errors handling here
    })
  }

  return (
    <div className="wrapper">
      <div className="contact">
        <div className='wrapper-header'>
          <h3>Links</h3>
          <button className='logoutbtn' onClick={logout}>Logout</button>
        </div>
        {links.map((link) => {
          return (
            <div key={link.id} className="link-card">
              <div className='link-description'>Description</div>
              <div>{link.description}</div>
              <a href={link.url} className='link-url'>{link.url}</a>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default LinkList;