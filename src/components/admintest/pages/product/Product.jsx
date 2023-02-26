import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { act_delete_product } from '../../../../action/productaction';

export default function Product(props) {
  let { product } = props;
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/admintest/editproduct/${product.productId}`, { state: product })
  }
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(act_delete_product(product.productId))
    props.render()
  }

  return (
    <tr>
      <td className="text-center">{product.productId}</td>
      <td className="text-center">
        <img src={product.imageProduct} style={{ width: "45px", height: "40px", borderRadius: "5px" }} />
      </td>
      <td className="text-center">{product.productName}</td>
      <td className="text-center">{product.catalog.catalogName}</td>
      <td className="text-center">{product.priceProduct}</td>

      <td className="text-center">
        <span
          className={
            (product.productStatus === true)
              ? "label label-info"
              : "label label-danger"
          }
        >
          {(product.productStatus === true)
            ? "Còn Hàng"
            : "Hết Hàng"}
        </span>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleEdit}
          style={{ height: "27px", width: "75px" }}
        >
          Edit
        </button>
        <button
          type="button"
          className={
            (product.productStatus === true)
              ? "label label-success"
              : "label label-tertiary-color"
          }
          style={{ height: "27px", width: "75px" }}
          onClick={handleDelete}
        >
          {(product.productStatus === true)
            ? "UNDISPLAY"
            : "DISPLAY"}
        </button>
      </td>
    </tr>
  )
}

