import './productList.scss'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { DeleteOutline } from '@mui/icons-material';
import { productsRows as rows } from '../../../../dummyData';
import { Link } from 'react-router-dom';
import React from 'react';

const ProductList = () => {
  const [data, setData] = useState(rows)

  const handleDelete = id => {
    setData(data.filter(item => item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: params => {
        return (
          <div className="productListField">
            <img src={params.row.img} alt="" />
            {params.row.name}
          </div>
        )
      }
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 90
    },
    {
      field: "price",
      headerName: "Price",
      width: 160
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: params => {
        return (
          <div>
            <>
              <Link to={`/product/${params.row.id}`}>
                <button className="editButton ">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </button>
              </Link>
              <DeleteOutline
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
              />
            </>
          </div>
        )
      }
    }
  ]

  return (
    <div className="productListPage">
      <div className="box-item-header">
        <h2 className="productList">List Product</h2>
        <Link to="/admintest/newProduct">
          <button className="btn-create">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={13}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}


export default ProductList