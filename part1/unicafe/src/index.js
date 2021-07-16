import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState } from 'react'


const WarningNoFeedback = () => <p>No feedback given</p>

const ShowButton = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const Statistics = ({text, value}) => <p>{text} {value}</p>

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

  const Average = (count.good - count.bad) / sum;
  const Averagepositive = (count.good / sum) * 100; 

  return (
    <div>
      <h1>give feedback</h1>
      <ShowButton handleClick={handleClickgood} text="good"/>
      <ShowButton handleClick={handleClickneutral} text="neutral"/>
      <ShowButton handleClick={handleClickbad} text="bad"/>
      <h1>statistics</h1>
      {sum === 0 ? (
      <WarningNoFeedback />) :
      <div>
      <Statistics text="good" value={count.good} />
      <Statistics text="neutral" value={count.neutral}/>
      <Statistics text="bad" value={count.bad}/>
      <Statistics text="all"  value={sum}/>
      <Statistics text="average" value={Average} />
      <Statistics text="positive" value={Averagepositive} />
      </div>}
    </div>
  )
}




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

