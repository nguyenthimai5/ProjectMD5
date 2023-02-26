import axios from "axios";
import { BASE_URL_PRODUCTDETAIL } from "../constants/Base_url";
const url=BASE_URL_PRODUCTDETAIL;
export const getDataProductDetails=async(id)=>{
id=id||""
return await axios.get(`${url}/getAll/${id}`)
}

export const createProductDetails=async(productDetail)=>{
    return await axios.post(url,productDetail)
    }

    export const deleteProductDetails=async(id)=>{
        return await axios.delete(`${url}/${id}`)
        }   

    