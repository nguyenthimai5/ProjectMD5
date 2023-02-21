import './productList.scss'
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataProduct } from '../../../../service/ProductApi';
import { act_get_all_product } from '../../../../action/productaction';
import Product from '../product/Product';


export default function ProductList() {
  const listProduct=useSelector(state=>state.listProduct);
  const dispatch=useDispatch();
  useEffect(()=>{
   getDataProduct().then((res)=>{
     dispatch(act_get_all_product(res.data))
   })
  },[])
  
  let elementProduct=listProduct?.map((product)=>{
   return < Product key={product.productId} product={product}/>
  })
 
 
   return (
     <div className="listProductPage">
       <div className="box-item-header">
         <Link to="/admintest/newProduct">
           <button className="btn-create">Create</button>
         </Link>
       </div>
       <div className="panel panel-success">
         <div className="panel-heading">List Product</div>
         <table className="table table-hover ">
           <thead>
             <tr>
               <th style={{ width: "5%" }} className="text-center">
                 Id
               </th>
               <th style={{ width: "10%" }} className="text-center">
                 Image
               </th>
               <th style={{ width: "15%" }} className="text-center">
                 Product Name
               </th>
               <th style={{ width: "20%" }} className="text-center">
                 Catalog
               </th>
               <th style={{ width: "10%" }} className="text-center">
                 Price
               </th>
               <th style={{ width: "20%" }} className="text-center">
                 Product Status
               </th>
               <th style={{ width: "20%" }}>Action</th>
             </tr>
           </thead>
           <tbody>
           {elementProduct}
           </tbody>
         </table>
       </div>
     </div>
   )
}
