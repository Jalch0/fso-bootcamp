import React from 'react'
import ReactDOM from 'react-dom'
import {course} from './courses'
import Content from "./Content.js"

const App = ({course}) => {

  return (
    <div>
      <Content content={course}/>
    </div>
  )
}

ReactDOM.render(<App course={course}/>, document.getElementById('root'))