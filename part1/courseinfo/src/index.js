import React from 'react'
import ReactDOM from 'react-dom'
import {course} from './courses'
import Content from "./Content.js"
import Total from "./Total.js"

const App = ({course}) => {

  return (
    <div>
      <Content content={course}/>
      {/* <Total exercises={course.parts}/> */}
    </div>
  )
}

ReactDOM.render(<App course={course}/>, document.getElementById('root'))