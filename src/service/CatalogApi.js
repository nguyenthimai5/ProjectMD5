import axios from 'axios'
import { BASE_URL_CATALOG } from '../constants/Base_url'

const url=BASE_URL_CATALOG;

export const getDataCatalogs= async(id)=>{
    id=id||""
    return await axios.get(`${url}/getAll/${id}`);
}

export const getDataCatalogsTrue= async(id)=>{
    id=id||""
    return await axios.get(`${url}/${id}`);
}

export const createCatalogs= async(catalog)=>{
  
    return await axios.post(url,catalog);
}

export const updateCatalogs= async(id,catalog)=>{
   
    return await axios.put(`${url}/${id}`,catalog);
}

export const deleteCatalogs= async(id)=>{
   
    return await axios.delete(`${url}/${id}`);
}