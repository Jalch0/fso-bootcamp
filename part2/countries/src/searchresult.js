import { Countrybutton } from "./countrybutton"

export const Searchresult = ({newcountries}) => {
    return newcountries.map(countries => {
        return <li key={countries.name}>
                    {countries.name} <Countrybutton country={countries} />
                </li>
    })
}