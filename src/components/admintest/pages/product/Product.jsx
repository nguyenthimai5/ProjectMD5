import React from 'react'

export default function Product(props) {
  let {product}=props;
  

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
          ? "Hoạt Động"
          : "Không Hoạt Động"}
        </span>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-warning"
        // onClick={handleEdit}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
        // onClick={handleDelete}
        >
          UnDisplay
        </button>
      </td>
    </tr>
  )
}

