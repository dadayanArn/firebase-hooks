import React from 'react';
import firebase from "../../firebase";
import { useHistory } from 'react-router-dom';

const Links = () => {
  const history = useHistory()
  const logout = () => {
    firebase.logout()
    .then(() => {
      history.push('/login')
    })
    .catch(() => {

    })
  }

  return (
    <div className="wrapper">
      <div className="contact">
        <div className='wrapper-header'>
          <h3>Links</h3>
          <button className='logoutbtn' onClick={logout}>Logout</button>
        </div>
        {[1, 2].map((item) => {
          return (
            <div key={item} className="link-card">
              <div className='link-description'>Description</div>
              <div>React documentation</div>
              <span className='link-url'>React.js</span>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Links;