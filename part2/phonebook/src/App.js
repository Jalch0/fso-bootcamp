import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number:'040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

const handleAddName = (event) => {
  setNewName(event.target.value)
}

const handleAddNumber = (event) => {
  setNewNumber(event.target.value)
}

const handleSubmit = (event) => {
    event.preventDefault()

    const findNameEqual = persons.some(person => person.name === newName);

    console.log(persons.some(persons => persons.name === newName))

    if(findNameEqual) {
      alert(`${newName} is already added to phonebook `)
    } else {
      const addPerson = [{
        name: newName,
        number: newNumber
      }]
      setPersons(persons.concat(addPerson))
      setNewName("")
      setNewNumber("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>name: <input type="text" value={newName} onChange={handleAddName}/></div>
        <div>number: <input type="text" value={newNumber} onChange={handleAddNumber} /></div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App