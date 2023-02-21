import './newProduct.scss'
import React, { useEffect, useState } from 'react'
import { Publish } from '@mui/icons-material'
import { useSelector } from 'react-redux';

export default function NewProduct() {
const [productName,setProductName]=useState("");
const [priceProduct,setPriceProduct] =useState("");
const [imageProduct,setImageProduct]=useState(null);
const [catalog,setCatalog]=useState({});

const listCatalog=useSelector(state=>state.listCatalog);
useEffect(()=>{

  
},[listCatalog])


  return (
    <div className='newProductPage'>
      <h1 className='h1-new-user'>New Product</h1>
      <form>
      
        <div className="item">
          <label>Product Name</label>
          <input type="text" placeholder='Product Name' />
        </div>
        <div className="item">
          <label>Price</label>
          <input type="text" placeholder='Price' />
        </div>
        <div className="item activeContainer">
          <label>Catalog</label>
          <select name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <div className="item activeContainer">
          <label> Active </label>
          <select name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <div className="item">
          <label>Image</label>
          <input type="file" id='file'  />
          <img src="" style={{width:"100px",height:"75px",marginLeft:"170px",margin:"5px"}}/>
          <label><Publish className='publish' /></label>
        </div>
        <button>Create</button>
      </form>
    </div>
  )
}
