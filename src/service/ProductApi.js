import axios from "axios";
import { BASE_URL_PRODUCT } from "../constants/Base_url";

const url=BASE_URL_PRODUCT;
export const getDataProduct=async(id)=>{
   id=id||""
    return await axios.get(`${url}/getAll/${id}`)
}

export const getDataProductTrue=async(id)=>{
    id=id||""
     return await axios.get(`${url}/${id}`)
 }

 export const productCreate=async(product)=>{
     return await axios.post(url,product)
 }

 export const updateProduct=async(id,product)=>{
    return await axios.put(`${url}/${id}`,product)
}

export const deleteProduct=async(id)=>{
    return await axios.delete(`${url}/${id}`)
}
export const searchProduct=async(productName)=>{
    return await axios.get(`${url}/searchByName?name=${productName}`)
}

export const getAllProductByCatalog=async(catalogId)=>{
    return await axios.get(`${url}/searchByCatalog?catalogId=${catalogId}`)
}