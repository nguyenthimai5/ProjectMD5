import React, {useState, createContext, useEffect } from 'react'
import { getDataCatalogs } from '../../service/CatalogApi';

export const DataContext=createContext();
export default function DataCatalogProvider(props) {
    const [catalogs,setCatalogs]=useState([]);
    useEffect(()=>{
        getDataCatalogs().then((res)=>{
            setCatalogs(res.data);
        });
    },[])
    return (
    <DataContext.Provider value={[catalogs,setCatalogs]}>
        {props.children}
    </DataContext.Provider>
  )
}
