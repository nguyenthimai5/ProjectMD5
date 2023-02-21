import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { create_catalog } from '../../../../action/catalogaction';
import './NewCatalog.scss'

const NewCatalog = () => {
    const [catalogName,setCatalogName]=useState("");
    const [catalogStatus,]=useState(true);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleCreate=()=>{
        console.log("vào new catalog");
      let newCatalog={catalogName,catalogStatus}
      dispatch(create_catalog(newCatalog))
     navigate(-1)
    }
    return (
        <div className="newCatalogPage">
            <h1 className="newpro">New Catalog</h1>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div className="item">
                    <label>Catalog Name</label>
                    <input type="text" placeholder='name' value={catalogName} onChange={(e)=>setCatalogName(e.target.value)}/>
                </div>
               
                {/* <div className="item activeContainer">
                    <label> Active </label>
                    <select name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div> */}
                <button onClick={handleCreate} >Create</button>
            </form>
        </div>
    )
}

export default NewCatalog