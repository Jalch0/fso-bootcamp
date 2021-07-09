import React from 'react'
import ReactDOM from 'react-dom'
import Header from "./Header.js"
import Content from "./Content.js"
import Total from "./Total.js"

const App = () => {
  const course = 'Half Stack application development'
  const content = ["Fundamentals of React", "Using props to pass data", "State of a component"]
  const exercises = [10, 7, 14]
  return (
    <div>
      <Header course={course}/>
      <Content content={content} exercises={exercises}/>
      <Total exercises={exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))