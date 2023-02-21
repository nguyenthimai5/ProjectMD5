import { Publish } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { act_update_topping } from '../../../../action/toppingaction';
import { storage } from '../../../../FireBase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './UpdateTopping.scss'

export default function UpdateTopping() {
    const toppingUp = useLocation().state;
    const [toppingName, setToppingName] = useState(toppingUp.toppingName);
    const [imageTopping, setImageTopping] = useState(toppingUp.imageTopping);
    const [descriptions, setDescriptions] = useState(toppingUp.descriptions);
    const [priceTopping, setPriceTopping] = useState(toppingUp.priceTopping);
    const [toppingStatus, setToppingStatus] = useState(toppingUp.toppingStatus);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUploadFile = () => {
        const imageRef = ref(storage, `imageToppings/${imageTopping.name}`)
        uploadBytes(imageRef, imageTopping).then((snaphsot) => {
            getDownloadURL(snaphsot.ref).then((url) => {
                setImageTopping(url)
            })


        })
    }

    const handleUpdate = () => {
        let toppingUpdate = { id: toppingUp.toppingId, toppingName, imageTopping, descriptions, priceTopping, toppingStatus };
        dispatch(act_update_topping(toppingUpdate));
        navigate(-1)

    }

    return (
        <div className='toppingPage'>
            <div className="titleContainer">
                <h1 className='content-h1'>Edit Topping</h1>

            </div>
            <div className="userContainer">
                <div className="show">
                    <div className="top">
                        <img src={imageTopping} alt={toppingUp.toppingName} />
                        <div className="title">
                            <span className="username">{toppingUp.toppingName}</span>
                            <span className="userTitle"></span>
                        </div>
                    </div>
                    <div className="bottom">
                        <span className="title">TOPPING DETAIL</span>
                        <div className="info">
                            Id:
                            <span className="infoTitle">{toppingUp.toppingId}</span>
                        </div>
                        <div className="info">
                            Topping Name:
                            <span className="infoTitle">{toppingUp.toppingName}</span>
                        </div>


                        <div className="info">
                            Description:
                            <span className="infoTitle">{toppingUp.descriptions}</span>
                        </div>
                        <div className="info">
                            Price:
                            <span className="infoTitle">{toppingUp.priceTopping}</span>
                        </div>
                        <div className="info">
                            Status Topping:
                            <span className="infoTitle">{(toppingUp.toppingStatus) ? "Hoạt Động" : "Không Hoạt Động"}</span>
                        </div>
                    </div>
                </div>
                <div className="update">
                    <span className="title">Edit</span>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="left">
                            <div className="updateItem">
                                <label>Topping name</label>
                                <input type="text" placeholder='Topping Name' value={toppingName} onChange={(e) => setToppingName(e.target.value)} />
                            </div>
                            <div className="updateItem">
                                <label>Price</label>
                                <input type="text" placeholder='Price' value={priceTopping} onChange={(e) => setPriceTopping(e.target.value)} />
                            </div>
                            <div className="updateItem">
                                <label>Description</label>
                                <input type="text" placeholder='Description' value={descriptions} onChange={(e) => setDescriptions(e.target.value)} />
                            </div>
                            <div className="updateItem">
                                <label>Topping Status</label>
                                <select name="active" id="active" value={toppingStatus} onChange={(e) => setToppingStatus(e.target.value)}>
                                    <option value={true}>Hoạt Động</option>
                                    <option value={false}>Không Hoạt Động</option>
                                </select>
                            </div>
                        </div>
                        <div className="right">
                            <div className="upload">
                                <label htmlFor="file"><img src={imageTopping} alt={toppingUp.toppingName}  /> </label>
                                <label onClick={handleUploadFile}><Publish className='publish' /></label>
                                <input type="file" id="file" style={{ display: 'none' }} onChange={(event) => {
                                    setImageTopping(event.target.files[0]);
                                }}/>
                            </div>
                        </div>
                        <button onClick={handleUpdate}>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
