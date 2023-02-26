import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { act_get_all_product_by_catalog, act_get_all_product_true } from '../../../action/productaction';
import { getAllProductByCatalog, getDataProductTrue } from '../../../service/ProductApi';
import Product from './Product'


export default function ListProduct(props) {
    const listProduct = useSelector(state => state.listProduct);
    const {catalogId}=props;
    const[recall,]=useState(true)

    const dispatch = useDispatch();
    useEffect(() => {
        getAllProductByCatalog(catalogId).then((res) =>
            dispatch(act_get_all_product_by_catalog(res.data))
        )
        
    }, [recall])
     


    let elementProduct=listProduct?.map((product)=>{
        return <Product key={product.productId} product={product} catalogId={props.catalogId}/>
       
    })
    return (
        <div className="row special-list">
        {elementProduct}    
        </div>
    )
}
