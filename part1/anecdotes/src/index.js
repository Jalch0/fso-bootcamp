import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const ShowAnecdote = ({anecdote, votes}) => {
  return(
    <div>
      <p>{anecdote}</p>
      <p>Has {votes} votes</p>
    </div>
  )
}

const App = ({anecdotes}) => {

  const [selected, setSelected] = useState(0)
  const [votation, setVotation] = useState(new Array(anecdotes.length).fill(0))
  const [Maxvoted, setMaxvoted] = useState(0)

  const vote = () => {
    const newVotation = [
      ...votation
    ]
  newVotation[selected] += 1;
  setVotation(newVotation);
    const newArray = votation.indexOf(Math.max(...votation))
  setMaxvoted(newArray);
  }

  const RandomAnecdote = () => {
    let AnecdoteNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(AnecdoteNumber);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <ShowAnecdote anecdote={anecdotes[selected]} votes={votation[selected]}/>
      <button onClick={vote}>vote</button>
      <button onClick={RandomAnecdote}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <ShowAnecdote anecdote={anecdotes[Maxvoted]} votes={votation[Maxvoted]}/>
    </div>
  )
}


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)