import React from 'react'
import ReactDOM from 'react-dom'
import Header from "./Header.js"
import Content from "./Content.js"
import Total from "./Total.js"

const App = () => {

  const course = {
    coursename: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercise: 10 
      },
      {
        name: "Using props to pass data",
        exercise: 7
      },
      {
        name: "State of a component",
        exercise: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course.coursename}/>
      <Content content={course.parts}/>
      <Total exercises={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))