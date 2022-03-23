import React from 'react';

function UserInput(props) {
   const userInputStyle = {
      border: '2px solid red'
   }

   return (
      <div>
         <input 
            style={ userInputStyle }
            type='text'
            onChange={ props.changed }
            value={ props.value }
         />
      </div>
    );
}

export default UserInput;
