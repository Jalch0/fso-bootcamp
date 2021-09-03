import {useState} from 'react'
import { Showdata } from './showdata'

export const Countrybutton = ({country}) => {

const [show, setShow] = useState(false)

const handleshow = () => {
    setShow(!show)
}

    return <div>
        <button onClick={handleshow}>Show</button>
    {show ? <Showdata country={country}/> : ""}
    </div>

}