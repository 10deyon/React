import React from 'react';
import './Test.css'

function Test( props ) {
  // const clickHandler = (another)=>{
  //   return another
  //   // click('Mary')
  // }

  return (
    <div className="Test">
      <p onClick={ props.click }>My name is: { props.name }, aged: { props.age }</p>
      <p>{ props.children }</p>
      <input type='text' onChange={ props.changed } value={ props.name } />
    </div>
  );
}
// {/* <p onClick={clickHandler}>My name is: {name}, aged: {age}</p> */}

export default Test;
