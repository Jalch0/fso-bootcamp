import React, { useState, useEffect } from 'react'
import { getAll, create, deletePerson, replace } from './services/requests'

const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  useEffect(() => {
    getAll().then(data => setPersons(prevPersons => prevPersons.concat(data)))
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
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const sameperson = persons.find(p => p.name === newName)
        const url = `http://localhost:3001/persons/${sameperson.id}`
        const changes = {...sameperson, number: newNumber}
        replace(url, changes).then(data => {
          setPersons(persons.map(p => p.id !== sameperson.id ? p : data));
          setNewName("");
          setNewNumber("");
        })
      } else {
        alert(`You can't add the same person`)
      }
    } else {
      const addPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1 
      }

      create(addPerson)
      .then(data => {
        setPersons(prevPersons => prevPersons.concat(data))
      })
      setNewName("")
      setNewNumber("")
    }
  }

  const handleDelete = (person) => {
    const url = `http://localhost:3001/persons/${person.id}`

    if(window.confirm("Are you sure to delete this person?")) {
      deletePerson(url).then(response => {
        console.log(response)
        setPersons(persons.filter(p => p.id !== person.id))
      })
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
      .map(person => <p key={person.name}>{person.name} {person.number} <button onClick={() => handleDelete(person)}>delete</button></p>)}
    </div>
  )
}

export default App