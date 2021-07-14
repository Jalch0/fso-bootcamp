import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState } from 'react'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickgood = () => {
    setGood(prevGood => prevGood + 1)
  }
  const handleClickneutral = () => {
    setNeutral(prevGood => prevGood + 1)
  }
  const handleClickbad = () => {
    setBad(prevGood => prevGood + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickgood}>good</button>
      <button onClick={handleClickneutral}>neutral</button>
      <button onClick={handleClickbad}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

