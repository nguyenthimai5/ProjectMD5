import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { act_get_all_productdetails } from '../../../../action/productDetailaction';

import { getDataProductDetails } from '../../../../service/ProductDetailsApi';

import './ListProductDetails.scss'
import ProductDetail from './ProductDetail';

export default function ListProductDetail() {
  const listProductDetail = useSelector(state => state.listProductDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    getDataProductDetails().then((res) => {
      dispatch(act_get_all_productdetails(res.data))
    })
   
  }, [listProductDetail])
  let elementProductDetails = listProductDetail?.map((proDet) => {
    return <ProductDetail key={proDet.productDtId} productDetails={proDet} />
  })

  return (
    <div className="listProductPage">
      <div className="box-item-header">
        
        <Link to="/admintest/newProductDetails">
          <button className="btn-create">Create</button>
        </Link>
      </div>
      <div className="panel panel-success">
        <div className="panel-heading">List ProductDetail</div>
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
                Product
              </th>
              <th style={{ width: "20%" }} className="text-center">
                Topping
              </th>
              <th style={{ width: "10%" }} className="text-center">
                Size
              </th>
              <th style={{ width: "10%" }} className="text-center">
                Price
              </th>
              <th style={{ width: "10%" }} className="text-center">
                Quantity
              </th>
              <th style={{ width: "10%" }} className="text-center">
                Status
              </th>
              <th style={{ width: "10%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {elementProductDetails}
          </tbody>
        </table>
      </div>
    </div>
  )
}
