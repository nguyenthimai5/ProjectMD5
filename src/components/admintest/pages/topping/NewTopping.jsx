import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { act_create_topping } from '../../../../action/toppingaction';
import './NewTopping.scss';
import { storage } from '../../../../FireBase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Publish } from '@mui/icons-material';

export default function NewTopping() {
  const [toppingName, setToppingName] = useState("");
  const [imageTopping, setImageTopping] = useState(null);
  const [descriptions, setDescriptions] = useState("");
  const [priceTopping, setPriceTopping] = useState("");
  const [toppingStatus,] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreate = () => {
      let newTopping = { toppingName, imageTopping, descriptions, priceTopping, toppingStatus };
    dispatch(act_create_topping(newTopping));
    navigate(-1)

  }

  const handleUpload = () => {
    if (imageTopping == null) return;
    const imageRef = ref(storage, `imageToppings/${imageTopping.name}`)
      uploadBytes(imageRef, imageTopping).then((snaphsot) =>{
      getDownloadURL(snaphsot.ref).then((url)=>{
        setImageTopping(url)
      })
    
     
    })
  }

  return (
    <div className="newToppingPage">
      <h1 className="newpro">New Topping</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="item">
          <label>Image</label>
          <input type="file" id='file' onChange={(event) => {
            setImageTopping(event.target.files[0]);
          }} />
          <img src={imageTopping} style={{width:"100px",height:"70px",marginLeft:"170px"}}/>
          <label onClick={handleUpload} ><Publish className='publish' /></label>
        </div>
        <div className="item">
          <label>Topping Name</label>
          <input type="text" placeholder='Topping name' value={toppingName} onChange={(e) => setToppingName(e.target.value)} />
        </div>
        <div className="item">
          <label>Description</label>
          <input type="text" placeholder='Description' value={descriptions} onChange={(e) => setDescriptions(e.target.value)} />
        </div>
        <div className="item">
          <label>Price Topping</label>
          <input type="number" placeholder='Price Topping' value={priceTopping} onChange={(e) => setPriceTopping(e.target.value)} />
        </div>
        <button onClick={handleCreate} >Create</button>
      </form>
    </div>
  )
}
