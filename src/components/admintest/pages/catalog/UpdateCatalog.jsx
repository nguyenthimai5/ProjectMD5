import { Publish } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { update_catalog } from '../../../../action/catalogaction'
import { productData } from '../../../../dummyData'
import Chart from '../../components/chart/Chart'
import './catalog.scss'
const UpdateCatalog= () => {

  const catalogUp=useLocation().state;
  const [catalogName,setCatalogName]=useState(catalogUp.catalogName);
  const [catalogStatus,setCatalogStatus]=useState(catalogUp.catalogStatus);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleUpdate=()=>{
    let catalogEdit={id:catalogUp.id,catalogName,catalogStatus}
    console.log("Edit",catalogEdit);
   dispatch(update_catalog(catalogEdit))
  navigate(-1)
  }
 
    return (
      <div className="CatalogPage">
        <div className="titleContainer">
          <h1 className="catalog">Catalog</h1>
        </div>
  
        <div className="top">
          <div className="topLeft">
            <Chart
              data={productData}
              dataKey="Sales"
              title="Sales Perfomance"
              grid
            />
          </div>
          <div className="topRight">
            <div className="topInfo">
              <img
                src="https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_cloud_alpha_blackred_1_main.jpg?v=1655969550"
                alt=""
              />
              <span>HyperX Cloud ALPHA</span>
            </div>
            <div className="bottomInfo">
              <div className="infoItem">
                <span className="key">id:</span>
                <span className="value">123</span>
              </div>
              <div className="infoItem">
                <span className="key">sales:</span>
                <span className="value">5123</span>
              </div>
              <div className="infoItem">
                <span className="key">active:</span>
                <span className="value">yes</span>
              </div>
              <div className="infoItem">
                <span className="key">in stock:</span>
                <span className="value">no</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <form>
            <div className="left">
              <label>Catalog Name</label>
              <input type="text" placeholder="name" value={catalogName} onChange={(e)=>setCatalogName(e.target.value)}/>
              <label>Status</label>
              <select name="active" id="active" value={catalogStatus} onChange={(e)=>setCatalogStatus(e.target.value)}>
                <option value="true">Yes</option>
                <option value="fasle">No</option>
              </select>
            </div>
            <div className="right">
              <div className="upload">
                <label htmlFor="file"><img src="https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_cloud_alpha_blackred_1_main.jpg?v=1655969550" alt=""/><Publish className='publish'/></label>
                <input type="file" id="file" style={{display: 'none'}} />
              </div>
            </div>
          </form>
          <div className="buttonWrapper">
            <button onClick={handleUpdate}>Update</button>
          </div>
        </div>
      </div>
    )
  }

  export default UpdateCatalog