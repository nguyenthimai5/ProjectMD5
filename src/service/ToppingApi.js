import axios from "axios";
import { BASE_URL_TOPPING } from "../constants/Base_url";

const url = BASE_URL_TOPPING;
export const getDataTopping = async (id) => {
    id = id || ""
    return await axios.get(`${url}/getAll/${id}`)
}

export const getDataToppingTrue = async (id) => {
    id = id || ""
    return await axios.get(`${url}/${id}`)
}

export const searchToppingName = async (name) => {
  
    return await axios.get(`${url}/search?name=${name}`)
}

export const createTopping = async (topping) => {
    return await axios.post(url,topping)
}

export const updateTopping = async (id,topping) => {
    return await axios.put(`${url}/${id}`,topping)
}

export const deleteTopping = async (id) => {
    return await axios.delete(`${url}/${id}`)
}