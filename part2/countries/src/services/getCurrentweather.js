import axios from "axios"

export const getCurrentweather = (name) => {
    const api_key = process.env.REACT_APP_API_KEY

    const params = {
        access_key: api_key,
        query: name
    }
    return axios.get("http://api.weatherstack.com/current", {params})
    .then(response => {
        const {data} = response;
        return data
    }).catch(error => {
        console.log(error)
    })
}