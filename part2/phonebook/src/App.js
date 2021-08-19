import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

const handleAddName = (event) => {
  setNewName(event.target.value)
}

const handleSubmit = (event) => {
    event.preventDefault()

    const findNameEqual = persons.some(person => person.name === newName);

    console.log(persons.some(persons => persons.name === newName))

    if(findNameEqual) {
      alert(newName.concat(" already exists"))
    } else {
      const addName = [{
        name: newName
      }]
      setPersons(persons.concat(addName))
      setNewName("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleAddName}/>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App