import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Size from './Size'
import { act_get_all_size } from '../../../../action/sizeaction';
import './ListSize.scss'
import { getDataSize } from '../../../../service/SizeApi';
export default function ListSize() {
const listSize=useSelector(state=>state.listSize);
const dispatch=useDispatch();
useEffect(()=>{
getDataSize().then((res)=>{
  dispatch(act_get_all_size(res.data))
})
},[listSize])

let elementSize=listSize?.map((size)=>{
  return <Size key={size.sizeId} size={size}/>
})

  return (
    <div className="listSizePage">
    <div className="box-item-header">
      <Link to="/admintest/newSize">
        <button className="btn-create">Create</button>
      </Link>
    </div>
    <div className="panel panel-success">
      <div className="panel-heading">List Size</div>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
                Id
            </th>
            <th>Size Name</th>
            <th style={{ width: "20%" }} className="text-center">
               Size Status
            </th>
            <th style={{ width: "20%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {elementSize}
        </tbody>
      </table>
    </div>
  </div>
  )
}
