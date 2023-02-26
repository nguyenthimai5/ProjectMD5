import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Size from './Size'
import { act_get_all_size,search_get_all_size } from '../../../../action/sizeaction';
import './ListSize.scss'
import { getDataSize ,searchSize} from '../../../../service/SizeApi';
export default function ListSize() {
const listSize=useSelector(state=>state.listSize);
const dispatch=useDispatch();
const [reCall, setReCall] = useState(true);
useEffect(()=>{
getDataSize().then((res)=>{
  dispatch(act_get_all_size(res.data))
})
},[reCall])
const render = () => {
  setReCall(!reCall)
   }

  const handleSearch = (e) => {
    searchSize(e).then((res) => {
      dispatch(search_get_all_size(res.data))

    })
    
  }  

let elementSize=listSize?.map((size)=>{
  return <Size key={size.sizeId} size={size} render={render}/>
})

  return (
    <div className="listSizePage">
    <div className="box-item-header">
    <input type="text" className="catalogList" placeholder='Search size.....'  onChange={(e) => handleSearch(e.target.value)}/>
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
