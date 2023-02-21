import React, { useState } from 'react'
import './UpdateSize.scss'
import Chart from '../../components/chart/Chart'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { act_edit_size } from '../../../../action/sizeaction';

export default function UpDateSize() {
  const sizeUp=useLocation().state;
  const [sizeName,setSizeName]=useState(sizeUp.sizeName);
  const [sizeStatus,setSizeStatus]=useState(sizeUp.sizeStatus);
  const dispatch=useDispatch();
  const navigate=useNavigate()

  const handleUpdate=()=>{
    let sizeUpdate={id:sizeUp.sizeId,sizeName,sizeStatus}
    dispatch(act_edit_size(sizeUpdate))
  navigate(-1)
  }

  return (
    <div className="sizePage">
      <div className="titleContainer">
        <h1 className="catalog">Catalog</h1>
      </div>

      <div className="top">
        <div className="topLeft">
          <Chart
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
              <span className="value">{sizeUp.sizeId}</span>
            </div>
            <div className="infoItem">
              <span className="key">Name:</span>
              <span className="value">{sizeUp.sizeName}</span>
            </div>
            <div className="infoItem">
              <span className="key">Status:</span>
              <span className="value">{(sizeUp.sizeStatus)?"Hoạt Động":"Không Hoạt Động"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <form>
          <div className="left">
            <label>Size Name</label>
            <input type="text" placeholder="name" value={sizeName} onChange={(e)=>setSizeName(e.target.value)}/>
            <label>Size Status</label>
            <select name="active" id="active" value={sizeStatus} onChange={(e)=>setSizeStatus(e.target.value)}>
              <option value={true}>Hoạt Động</option>
              <option value={false}>Không Hoạt Động</option>
            </select>
          </div>
          <div className="right">
            <div className="upload">
              <label htmlFor="file"><img src="https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_cloud_alpha_blackred_1_main.jpg?v=1655969550" alt="" /></label>
              <input type="file" id="file" style={{ display: 'none' }} />
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
