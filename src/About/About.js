import React from 'react'

const About = (props) => {
   // const [ xState, setXState ] = useState ({
   //    values : [
   //       { name: 'OLu', age: 22 },
   //    ],
   // })

   // const xHandler = (newName) => {
   //    setXState({
   //       values : [
   //          { name: newName, age: 22 },
   //       ]
   //    })
   // }

   return (
      <div>
         <h1 onClick={ props.click }>WELCOME </h1>
      </div>
   )
}

export default About