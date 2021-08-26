import React, { useState, useEffect } from 'react'
import { getAllPersons } from './services/getAllPersons'
import { createPerson } from './services/createPerson'

const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  useEffect(() => {
    getAllPersons().then(data => setPersons(prevPersons => prevPersons.concat(data)))
  }, [])


const searchfilter = (event) => {
  setNewFilter(event.target.value)
}

const handleAddName = (event) => {
  setNewName(event.target.value)
}

const handleAddNumber = (event) => {
  setNewNumber(event.target.value)
}

const handleSubmit = (event) => {
    event.preventDefault()

    const findNameEqual = persons.some(person => person.name === newName);

    if(findNameEqual) {
      alert(`${newName} is already added to phonebook `)
    } else {
      const addPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1 
      }

      createPerson(addPerson)
      .then(data => {
        setPersons(prevPersons => prevPersons.concat(data))
      })
      setNewName("")
      setNewNumber("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with: <input type="text" value={newFilter} onChange={searchfilter}/></div>
      <h2>add a new</h2>
      <form>
        <div>name: <input type="text" value={newName} onChange={handleAddName}/></div>
        <div>number: <input type="text" value={newNumber} onChange={handleAddNumber} /></div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
      .filter((person) => {
        return person.name.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1
      })
      .map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App