import axios from "axios";
import { BASE_URL_SIZE } from "../constants/Base_url";

const url = BASE_URL_SIZE;
export const getDataSize = async (id) => {
    id = id || ""
    return await axios.get(`${url}/getAll/${id}`)
}
export const getDataSizeTrue = async (id) => {
    id = id || ""
    return await axios.get(`${url}/${id}`)
}

export const searchSize = async (name) => {

    return await axios.get(`${url}/search?name=${name}`)
}

export const createSize = async (size) => {
 
    return await axios.post(url, size)
}

export const editSize = async (id, size) => {
    return await axios.put(`${url}/${id}`, size)
}
export const deleteSize = async (id) => {
    return await axios.delete(`${url}/${id}`)
}