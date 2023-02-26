import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { delete_catalog } from '../../../../action/catalogaction';

export default function Catalog(props) {
 let {catalog}=props;
 const dispatch=useDispatch();
 const navigate=useNavigate();
 const handleEdit=()=>{
     navigate(`editCatalog/${catalog.catalogId}`,{state:catalog})
 }
 const handleDelete=()=>{
  props.render()
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
          ? "Còn Hàng"
          : "Hết Hàng"}
      </span>
    </td>
    <td>
      <button
        type="button"
        className="btn btn-warning"
        style={{height:"27px",width:"75px"}}
        onClick={handleEdit}
      >
        Edit
      </button>
      <button
          type="button"
          className={
            (catalog.catalogStatus===true)
              ? "label label-success"
              : "label label-secondary"
          }
          style={{height:"27px",width:"75px"}}
        onClick={handleDelete}
        >
           {(catalog.catalogStatus===true)
          ? "UNDISPLAY"
          : "DISPLAY"}
        </button>
    </td>
  </tr>
  )
}
