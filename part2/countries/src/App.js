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

  const filter = countries.filter((countries) => {
    return (countries.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
  })
  
  return (
    <div>
      <label>
        find countries
        <input type="text" onChange={searchCountries}/>
      </label>
      {search === "" ? <p>Write something to start finding countries.</p> :
      filter.length > 10 ? <p>Too many results, write another filter</p> :
      <ul><Searchresult newcountries={filter}/></ul>}
    </div>
  );
}

export default App;
