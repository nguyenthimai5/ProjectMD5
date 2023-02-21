import './ListCatalog.scss'
import { Link } from 'react-router-dom';
import Catalog from '../catalog/Catalog';
import { useDispatch, useSelector } from 'react-redux';

import React, { useEffect } from 'react'
import { getDataCatalogs } from '../../../../service/CatalogApi';
import { get_all_catalog } from '../../../../action/catalogaction';

export default function ListCatalog() {
  const listCatalog=useSelector(state=>state.listCatalog);
  console.log("List catalog ====>",listCatalog);
   const dispatch=useDispatch();
  useEffect(()=>{
  getDataCatalogs().then((res)=>{
    dispatch(get_all_catalog(res.data))
  })
  },[listCatalog])
  let element=listCatalog?.map((data)=>{
    return <Catalog key={data.catalogId} catalog={data} />
  })
  return (
    <div className="catalogListPage">
      <div className="box-item-header">
        
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

