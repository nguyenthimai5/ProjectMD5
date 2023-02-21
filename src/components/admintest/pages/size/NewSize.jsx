import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { act_create_size } from '../../../../action/sizeaction';
import './NewSize.scss'

export default function NewSize() {
    const [sizeName, setSizeName] = useState("");
    const [sizeStatus,] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleCreate = () => {
        console.log("vao new size chua");
        let newSize = {sizeName, sizeStatus}
        dispatch(act_create_size(newSize))
        navigate(-1)
    }

    return (
        <div className="newSizePage">
            <h1 className="newpro">New Size</h1>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div className="item">
                    <label>Size Name</label>
                    <input type="text" placeholder='name' onChange={(e) => setSizeName(e.target.value)} />
                </div>

                {/* <div className="item activeContainer">
                    <label> Active </label>
                    <select name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div> */}
                <button onClick={handleCreate}>Create</button>
            </form>
        </div>
    )
}
