import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { act_delete_size } from '../../../../action/sizeaction';

export default function Size(props) {
  const {size}=props;
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleEdit=()=>{
   navigate(`editSize/${size.sizeId}`,{state:size})
  }

  const handleDelete=()=>{
  dispatch(act_delete_size(size.sizeId))
  }

  return (
    <tr>
    <td className="text-center">{size.sizeId}</td>
    <td>{size.sizeName}</td>
    <td className="text-center">
      <span
        className={
          size.sizeStatus ===true
            ? "label label-info"
            :  "label label-danger"
        }
      >
        {size.sizeStatus=== true
          ? "Hoạt Động"
          : "Không Hoạt Động"}
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
