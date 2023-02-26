import './ListCatalog.scss'
import { Link } from 'react-router-dom';
import Catalog from '../catalog/Catalog';
import { useDispatch, useSelector } from 'react-redux';

import React, { useEffect, useState } from 'react'
import { getDataCatalogs, searchCatalog } from '../../../../service/CatalogApi';
import { get_all_catalog, search_catalog } from '../../../../action/catalogaction';

export default function ListCatalog() {
  const listCatalog=useSelector(state=>state.listCatalog);
  const [reCall, setReCall] = useState(true);
   const dispatch=useDispatch();
  useEffect(()=>{
  getDataCatalogs().then((res)=>{
    dispatch(get_all_catalog(res.data))
  })
  },[reCall])
  const render = () => {
    setReCall(!reCall)
     }

    const handleSearch = (e) => {
      searchCatalog(e).then((res) => {
        dispatch(search_catalog(res.data))
      })
      
    }  
  let element=listCatalog?.map((data)=>{
    return <Catalog key={data.catalogId} catalog={data} render={render}/>
  })
  return (
    <div className="catalogListPage">
      <div className="box-item-header">
      <input type="text" className="catalogList" placeholder='Search catalog.....'  onChange={(e) => handleSearch(e.target.value)}/>
        <Link to="/admintest/newCatalog">
          <button className="btn-create">Create</button>
        </Link>
      </div>
      <div className="panel panel-success">
        <div className="panel-heading">List Catalog</div>
        <table className="table table-hover ">
          <thead>
            <tr>
              <th style={{ width: "10%" }} className="text-center">
                  Id
              </th>
              <th>Catalog Name</th>
              <th style={{ width: "20%" }} className="text-center">
                 Catalog Status
              </th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {element}
          </tbody>
        </table>
      </div>
    </div>

  )
}

