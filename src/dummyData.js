import React, {useState, createContext, useEffect } from 'react'
import { getDataCatalogs } from './service/CatalogApi';

export const DataContext=createContext();

export const userData = [
  {
    name: 'Jan',
    'Active User': 4000
  },
  {
    name: 'Feb',
    'Active User': 2500
  },
  {
    name: 'Mar',
    'Active User': 2100
  },
  {
    name: 'Apr',
    'Active User': 3200
  },
  {
    name: 'May',
    'Active User': 5000
  },
  {
    name: 'Jun',
    'Active User': 4300
  },
  {
    name: 'Jul',
    'Active User': 1000
  },
  {
    name: 'Agu',
    'Active User': 200
  },
  {
    name: 'Sep',
    'Active User': 1700
  },
  {
    name: 'Oct',
    'Active User': 7000
  },
  {
    name: 'Nov',
    'Active User': 9000
  },
  {
    name: 'Dec',
    'Active User': 5000
  }
]


export  const DataCatalogProviders=(props)=> {
    const [catalog,setCatalog]=useState([]);
    useEffect(()=>{
        getDataCatalogs().then((res)=>{
            setCatalog(res.data);
        });
    },[])
    return (
    <DataContext.Provider value={[catalog,setCatalog]}>
        {props.children}
    </DataContext.Provider>
  )
}

export const productsRows = ()=>[
  {
    id: 1,
    name: 'Apple Airpods',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
    stock: 123,
    status: 'active',
    price: '$120.00'
  },
  {
    id: 2,
    name: 'Apple Airpods',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
    stock: 123,
    status: 'active',
    price: '$120.00'
  },
  {
    id: 3,
    name: 'Apple Airpods',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
    stock: 123,
    status: 'active',
    price: '$120.00'
  },
  {
    id: 4,
    name: 'Apple Airpods',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
    stock: 123,
    status: 'active',
    price: '$120.00'
  },
  {
    id: 5,
    name: 'Apple Airpods',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
    stock: 123,
    status: 'active',
    price: '$120.00'
  },
  {
    id: 6,
    name: 'Apple Airpods',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
    stock: 123,
    status: 'active',
    price: '$120.00'
  },
  {
    id: 7,
    name: 'Apple Airpods',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
    stock: 123,
    status: 'active',
    price: '$120.00'
  },
  {
    id: 8,
    name: 'Apple Airpods',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
    stock: 123,
    status: 'active',
    price: '$120.00'
  },
  {
    id: 9,
    name: 'Apple Airpods',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
    stock: 123,
    status: 'active',
    price: '$120.00'
  },
  {
    id: 10,
    name: 'Apple Airpods',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
    stock: 123,
    status: 'active',
    price: '$120.00'
  },
  {
    id: 11,
    name: 'Apple Airpods',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000',
    stock: 123,
    status: 'active',
    price: '$120.00'
  }
]

export const productData = [
  {
    name: 'Jan',
    Sales: 4000
  },
  {
    name: 'Feb',
    Sales: 2500
  },
  {
    name: 'Mar',
    Sales: 2100
  }
]
