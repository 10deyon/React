import React, { useState } from 'react';
import './App.css';
import Test from './Test/Test';
// import About from './About/About';
import UserInput from './userInput/userInput';
import UserOutput from './userOutput/userOutput';


const App2 = (...props) => {
  const [ personsState, setPersonsState ] = useState({
    persons : [
      { name: 'OLu', age: 22 },
      { name: 'Ola', age: 19 },
      { name: 'Mide', age: 24 },
    ],
  })

  const [ otherState, setOtherState ] = useState({
    otherState: 'Some other state'
  })
  
  const switchNameHandler = (newName) => {
    setPersonsState({
      persons : [
        { name: newName, age: 22 },
        { name: 'Crusher Lee', age: 19 },
        { name: 'Deyone', age: 24 },
      ]
    })

    setOtherState({
      otherState: "changed state"
    })
  }

  const nameChangeHandler = (event) => {
    event.preventDefault();
    setPersonsState({
      persons : [
        { name: 'newName', age: 22 },
        { name: event.target.value, age: 19 },
        { name: 'Deyon', age: 26 },
      ]
    })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid red',
    padding: '8px',
    cursor: 'pointer'
  }

  const [ usernameState, setUsernameState ] = useState({
    userName: 'Emmanuel'
  });

  const usernameChangeHandler = (event) => {
    setUsernameState({
      userName: event.target.value,
    })
  }

  return (
    <div className="App">
      <h1>I'M IN FOR A CHALLENGE</h1>
      <p>I'M A REACT BEGINNER</p>
      
      <button style={style} onClick={ () => switchNameHandler('Joel') }> Switch state</button>

      <Test 
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        />
      <Test 
        changed={ nameChangeHandler }
        click={switchNameHandler.bind(switchNameHandler, 'Noel')}
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      > Hobby: Gaming </Test>

      {/* <Test click={ switchNameHandler } name={personsState.persons[1].name} age={personsState.persons[1].age}>Hobby: Gaming</Test> */}
      <Test name={personsState.persons[2].name } age={personsState.persons[2].age} /> 
      
      <UserInput changed={ usernameChangeHandler } value={ usernameState.userName }/>

      <UserOutput userName={ usernameState.userName } />
      <UserOutput userName={ 'Emmanuel' } />
      <UserOutput userName={ 'Deyon' } />
    </div>
  );
}

/* </div>name={personsState.persons[0].name}></About> */

// class App extends Component {
//   state = {
//     persons : [
//       {name: '', age: 29},
//       {name: '', age: 9},
//       {name: '', age: 21},
//     ]
//   }

//   switchNameHandler = () => {
//     this.setState({
//       persons : [
//         {name: 'Imanuelesson', age: 22},
//         {name: 'Crusher Lee', age: 19},
//         {name: 'Deyone', age: 24},
//       ]
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>I'M IN FOR A CHALLENGE</h1>
//         <p>I'M A REACT BEGINNER</p>

//         <button onClick={this.switchNameHandler}> Switch state</button>
//         <Test name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobby: Gaming</Test>
//         <Test name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobby: Gaming</Test>
//         <Test name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobby: Gaming</Test>
//       </div>
//     );
//   }
// }

export default App2;
