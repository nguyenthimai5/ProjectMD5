import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { act_get_all_topping,search_get_all_topping_true } from '../../../../action/toppingaction';
import { getDataTopping , searchToppingName} from '../../../../service/ToppingApi';
import './ListTopping.scss'
import Topping from './Topping';

export default function ListTopping() {
   const listTopping=useSelector(state=>state.listTopping);
   const dispatch=useDispatch();
   const [reCall, setReCall] = useState(true);
   useEffect(()=>{
    getDataTopping().then((res)=>
          dispatch(act_get_all_topping(res.data))
        )
   },[reCall])

   const render = () => {
    setReCall(!reCall)
     }
  
    const handleSearch = (e) => {
        searchToppingName(e).then((res) => {
        dispatch(search_get_all_topping_true(res.data))
  
      })
      
    }  
 
   let elementTopping=listTopping?.map((topping)=>{
    return <Topping key={topping.toppingId} topping={topping} render={render}/>
   })


    return (
        <div className="listToppingPage">
            <div className="box-item-header">
            <input type="text" className="catalogList" placeholder='Search topping.....'  onChange={(e) => handleSearch(e.target.value)}/>
                <Link to="/admintest/newTopping">
                    <button className="btn-create">Create</button>
                </Link>
            </div>
            <div className="panel panel-success">
                <div className="panel-heading">List Topping</div>
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
                                Topping Name
                            </th>
                            <th style={{ width: "20%" }} className="text-center">
                                Description
                            </th>
                            <th style={{ width: "10%" }} className="text-center">
                                Price
                            </th>
                            <th style={{ width: "20%" }} className="text-center">
                                Topping Status
                            </th>
                            <th style={{ width: "20%" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                     {elementTopping}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
