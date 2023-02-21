import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { delete_catalog } from '../../../../action/catalogaction';

export default function Catalog(props) {
 let {catalog}=props;
 const dispatch=useDispatch();
 const navigate=useNavigate()
 const handleEdit=()=>{
     navigate(`editCatalog/${catalog.catalogId}`,{state:catalog})
 }
 const handleDelete=()=>{
  dispatch(delete_catalog(catalog.catalogId))
 }
  return (
    <tr>
    <td className="text-center">{catalog.catalogId}</td>
    <td>{catalog.catalogName}</td>
    <td className="text-center">
      <span
        className={
          (catalog.catalogStatus===true)
            ?"label label-info"
            :"label label-danger"
        }
      >
        {(catalog.catalogStatus===true)
          ?"Hoạt Động"
          :"Không Hoạt Động"}
      </span>
    </td>
    <td>
      <button
        type="button"
        className="btn btn-warning"
        onClick={handleEdit}
      >
        Edit
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={handleDelete}
        >
        UnDisplay
      </button>
    </td>
  </tr>
  )
}
