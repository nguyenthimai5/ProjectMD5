import React from 'react'
import { useDispatch } from 'react-redux';
import { act_delete_productdetails } from '../../../../action/productDetailaction';

export default function ProductDetail(props) {
  const {productDetails}=props;

  const dispatch=useDispatch();
  const handleDelete=()=>{
    dispatch(act_delete_productdetails(productDetails.productDtId))
    
  }


  return (
    <tr>
      <td className="text-center">{productDetails.productDtId}</td> 
      <td className="text-center">
        <img src={productDetails.product.imageProduct} style={{ width: "45px", height: "40px", borderRadius: "5px" }} />
      </td>
      <td className="text-center">{productDetails.product.productName}</td>
 
      <td className="text-center">{productDetails.topping.toppingName}</td>
      <td className="text-center">{productDetails.size.sizeName}</td>
      <td className="text-center">{productDetails.priceDt}</td>
      <td className="text-center">{productDetails.quantity}</td>
      <td className="text-center">
        <span
        className={
          (productDetails.productDetailStatus === true)
            ? "label label-info"
            : "label label-danger"
        }
        >
          {(productDetails.productDetailStatus === true)
          ? "Còn Hàng"
          : "Hết Hàng"}
        
        </span>
        
      </td>
      <td>
        
        <button
          type="button"
          className= "label label-success"
          onClick={handleDelete}
          style={{height:"24px",width:"75px"}}
        >
      DELETE
        </button>
      </td>
    </tr>
  )
}
