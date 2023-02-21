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