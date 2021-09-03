import {useState, useEffect} from 'react'
import { getCurrentweather } from './services/getCurrentweather'


export const Showdata = ({country}) => {

const [weather, setWeather] = useState([])

    useEffect(() => {
        getCurrentweather(country.name).then(data => {
            const inf = {
                temperature: data.current.temperature,
                icon: data.current.weather_icons,
                wind: data.current.wind_speed,
                direction: data.current.wind_dir
            }
            setWeather(inf)
        })
    
    },[country.name])

return (
    <div key={country.name}>
        <h2>{country.name}</h2>
        <p>{country.capital}</p>
        <p>{country.population}</p>
        <h2>languages</h2>
        <ul>
            {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
        </ul>
        <img width="250px" height="150px" src={country.flag} alt={`flag of ${country.name}`} />
        <h2>Weather in {country.name}</h2>
        <p>temperature : {weather.temperature}</p>
        <img width="100px" height="100px" src={weather.icon} alt='icon_weather'/>
        <p>wind: {weather.wind} mph direction {weather.direction}</p>
    </div>
    )}