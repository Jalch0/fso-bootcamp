import { getAllCountries } from "./services/getAllCountries";
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
      <form>
      <label>
        find countries
        <input type="text" id="find" onChange={searchCountries}/>
      </label>
      {search === "" ? <p>Write something to start finding countries.</p> :
          filtro.length === 1 ? filtro.map(country => {
            return <div>
              <h2>{country.name}</h2>
              <p>capital {country.capital}</p>
              <p>population {country.population}</p>
              <h2>languages</h2>
              {country.languages.map(name => <ul><li key={name.name}>{name.name}</li></ul>)}
              <img width="100" height="100"src={country.flag} alt="countryflag"></img>
            </div>
          }) :
          filtro.length > 10 ? <p>Too many results, write another filter</p> : 
          filtro.map(countries => {
          return <p key={countries.name}>{countries.name}</p>
        })}
      </form>

    </div>
  );
}

export default App;
