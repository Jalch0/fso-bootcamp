export const Showdata = ({country}) => {
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
    </div>
    )}