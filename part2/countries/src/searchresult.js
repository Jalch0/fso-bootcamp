import { Countrybutton } from "./countrybutton"

export const Searchresult = ({filtro, setShow, show}) => {
    return filtro.map(countries => {
        return <li key={countries.name}>
                    {countries.name} <Countrybutton country={countries} show={show} setShow={setShow}/>
                </li>
    })
}