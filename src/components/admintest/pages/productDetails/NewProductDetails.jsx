import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { act_get_all_product_true } from '../../../../action/productaction';
import { act_create_productdetails } from '../../../../action/productDetailaction';
import { act_get_all_size_true } from '../../../../action/sizeaction';
import { act_get_all_topping_true } from '../../../../action/toppingaction';
import { getDataProductTrue } from '../../../../service/ProductApi';
import { getDataSize, getDataSizeTrue } from '../../../../service/SizeApi';
import { getDataToppingTrue } from '../../../../service/ToppingApi';

import './NewProductDetails.scss'
export default function NewProductDetails() {
  const listProduct = useSelector(state => state.listProduct);
  const listTopping = useSelector(state => state.listTopping);
  const listSize = useSelector(state => state.listSize);
  const [productId, setProductId] = useState("");
  const [toppingId, setToppingId] = useState("");
  const [sizeId, setSizeId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [descriptions, setDescriptions] = useState("");
  const [productDetailStatus, setProductDetailStatus] = useState(true);
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getDataProductTrue().then((res) =>
      dispatch(act_get_all_product_true(res.data))
    )
    getDataSizeTrue().then((res) => {
      dispatch(act_get_all_size_true(res.data))
    })
    getDataToppingTrue().then((res) => {
      dispatch(act_get_all_topping_true(res.data))
    })

  }, [])

  let elementProduct = listProduct?.map((pro) => {
    return <option value={pro.productId}>{pro.productName}</option>
  })

  let elementTopping = listTopping?.map((topping) => {
    return <option value={topping.toppingId}>{topping.toppingName}</option>
  })

  let elementSize = listSize?.map((size) => {
    return <option value={size.sizeId}>{size.sizeName}</option>
  })



  const handleCreate = () => {
    let product = listProduct?.filter(pro => pro.productId == productId);
    let topping = listTopping?.filter(top => top.toppingId == toppingId);
    let size = listSize?.filter(size => size.sizeId == sizeId);
    let price = (product[0].priceProduct) + parseInt(Math.random() * 10) + (topping[0].priceTopping);
    let proDetailNew = { product: product[0], size: size[0], topping: topping[0], priceDt: price, quantity, descriptions, productDetailStatus };
    dispatch(act_create_productdetails(proDetailNew))
    navigate(-1)
  }


  return (
    <div className='newUserPage'>
      <h1 className='h1-new-user'>New Detail</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="item activeContainer">
          <label>Product</label>
          <select name='active' id='active' value={productId} onChange={(e) => setProductId(e.target.value)}>
            {elementProduct}
          </select>
        </div>
        <div className="item activeContainer">
          <label>Topping</label>
          <select name='active' id='active' value={toppingId} onChange={(e) => setToppingId(e.target.value)} >
            {elementTopping}
          </select>
        </div>
        <div className="item">
          <label>Quantity</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <div className="item activeContainer">
          <label>Size</label>
          <select name='active' id='active' value={sizeId} onChange={(e) => setSizeId(e.target.value)}>
            {elementSize}
          </select>
        </div>
        <div className="item">
          <label>Description</label>
          <input type="text" placeholder='Description...' value={descriptions} onChange={(e) => setDescriptions(e.target.value)} />
        </div>
        <div className="item">

        </div>
        <div className="item">
        </div>

        <div className="item activeContainer">

        </div>
        <button onClick={handleCreate}>Create</button>
      </form>
    </div>
  )
}
