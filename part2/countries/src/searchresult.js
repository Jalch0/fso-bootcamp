import { Countrybutton } from "./countrybutton"

export const Searchresult = ({filtro, setShow, show}) => {
    return filtro.map(countries => {
        return <ul key={countries.name}><li>{countries.name}</li> <Countrybutton country={countries} show={show} setShow={setShow}/></ul>
    })
}