import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState } from 'react'


const WarningNoFeedback = () => <p>No feedback given</p>

const Statistics = (props) => {
  
  return (
    <div>
      <p>good</p>
      <p>neutral</p>
      <p>bad</p>
      <p>All {props.sum}</p>
      <p>Average</p>
      <p>Positive</p>
    </div>
    )
}

const App = () => {

  const [count, setCount] = useState({
    good: 0,
    neutral:0,
    bad: 0
  })
  const [sum, setSum] = useState(0)

  const handleClickgood = () => {
      const NewCountState = {
        ...count,
        good: count.good + 1
      }
    setCount(NewCountState)
    setSum(prevSum => prevSum + 1);
  }
  const handleClickneutral = () => {
      const NewCountState = {
        ...count,
        neutral: count.neutral + 1
      }
    setCount(NewCountState)
    setSum(prevSum => prevSum + 1);
  }
  const handleClickbad = () => {
      const NewCountState = {
        ...count,
        bad: count.bad + 1
      }
  setCount(NewCountState)
  setSum(prevSum => prevSum + 1);
  }


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickgood}>good</button>
      <button onClick={handleClickneutral}>neutral</button>
      <button onClick={handleClickbad}>bad</button>
      <h1>statistics</h1>
      {sum === 0 ? (
      <WarningNoFeedback />) : 
      <Statistics count={count} sum={sum} />}
    </div>
  )
}




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

