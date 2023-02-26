import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { act_delete_topping } from '../../../../action/toppingaction';


export default function Topping(props) {
  let { topping } = props;
 
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const handleEdit = () => {
    navigate(`editTopping/${topping.id}`, { state: topping });
  }

  const handleDelete=()=>{
    props.render()
  dispatch(act_delete_topping(topping.toppingId))
  }

  return (
    <tr>
      <td className="text-center">{topping.toppingId}</td>
      <td className="text-center">
        <img src={topping.imageTopping} style={{ width: "45px", height: "40px",borderRadius:"5px" }} />
      </td>
      <td className="text-center">{topping.toppingName}</td>
      <td className="text-center">{topping.descriptions}</td>
      <td className="text-center">{topping.priceTopping}</td>

      <td className="text-center">
        <span
          className={
            (topping.toppingStatus === true)
              ? "label label-info"
              : "label label-danger"
          }
        >
          {(topping.toppingStatus === true)
            ? "Hoạt Động"
            : "Không Hoạt Động"}
        </span>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleEdit}
          style={{height:"27px",width:"75px"}}
        >
          Edit
        </button>
        <button
          type="button"
          className={
            (topping.toppingStatus === true)
              ? "label label-success"
              : "label label-tertiary-color"
          }
          style={{height:"27px",width:"75px"}}
        onClick={handleDelete}
        >
           {(topping.toppingStatus === true)
        ? "UNDISPLAY"
        : "DISPLAY"}
        </button>
      </td>
    </tr>
  )
}
