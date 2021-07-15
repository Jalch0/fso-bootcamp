import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState } from 'react'

const Statistics = (props) => {

  const all = (props.ComGood + props.ComNeutral + props.ComBad);
  const average = ((props.ComGood - props.ComBad) / all).toFixed(2);
  const positive = ((props.ComGood / all) * 100).toFixed(2);

  return (
    <div>
      <p>All{all}</p>
      {isNaN(average, positive) ? (
        <div>
          <p>Average 0</p>
          <p>Positive 0</p>
        </div>
      ) :
      <div>
        <p>Average {average}</p>
        <p>Positive {positive}%</p>
      </div>

      }

    </div>
  )

}

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
      <Statistics ComGood={good} ComNeutral={neutral} ComBad={bad} /> 
    </div>
  )
}




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

