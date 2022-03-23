import React from 'react';
import './userOutput.css';

function UserOutput(props) {
   return (
      <div className='UsernameOutput'>
        <p>Username: { props.userName }</p>
        <p>I hope I've written everything</p>
      </div>
    );
}

export default UserOutput;
