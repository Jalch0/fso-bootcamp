import { getAllCountries } from "./services/getAllCountries";
import { Searchresult } from "./searchresult";
import {useEffect, useState} from 'react'

function App() {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    getAllCountries().then(data => {
      setCountries(data)
    })
  }, [])

  const searchCountries = (ev) => {
    setSearch(ev.target.value)
  }

  const filtro = countries.filter((countries) => {
    return (countries.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
  })
  
  return (
    <div>
      <label>
        find countries
        <input type="text" id="find" onChange={searchCountries}/>
      </label>
      {search === "" ? <p>Write something to start finding countries.</p> :
      filtro.length > 10 ? <p>Too many results, write another filter</p> :
      <Searchresult filtro={filtro}/>}
    </div>
  );
}

export default App;
