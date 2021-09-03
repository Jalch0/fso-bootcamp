import axios from "axios"

const baseUrl = "http://localhost:3001/persons"

export const getAll = () => {
    return axios
    .get(baseUrl)
    .then(response => response.data)
}

export const create = ({name, number, id}) => {
    return axios
    .post(baseUrl, {name, number, id})
    .then(response => response.data)
}

export const replace = (url, changes) => {
    return axios
    .put(url, changes)
    .then(response => response.data)
} 

export const deletePerson = url => {
    return axios
    .delete(url)
}

