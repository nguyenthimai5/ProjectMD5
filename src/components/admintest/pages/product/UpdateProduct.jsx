import React from 'react'
import './product.scss'
export default function UpdateProduct() {
  return (
    <div className='productPage'>
            <div className="titleContainer">
                <h1 className='content-h1'>Edit Product</h1>
            </div>
            <div className="userContainer">
                <div className="show">
                    <div className="top">
                        <img src="{imageTopping}" alt="{toppingUp.toppingName}" />
                        <div className="title">
                            <span className="username">toppingName</span>
                            <span className="userTitle"></span>
                        </div>
                    </div>
                    <div className="bottom">
                        <span className="title">PRODUCT DETAIL</span>
                        <div className="info">
                            Id:
                            <span className="infoTitle"></span>
                        </div>
                        <div className="info">
                            Product Name:
                            <span className="infoTitle"></span>
                        </div>


                        <div className="info">
                            Description:
                            <span className="infoTitle"></span>
                        </div>
                        <div className="info">
                            Price:
                            <span className="infoTitle"></span>
                        </div>
                        <div className="info">
                            Status Product:
                            <span className="infoTitle"></span>
                        </div>
                    </div>
                </div>
                <div className="update">
                    <span className="title">Edit</span>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="left">
                            <div className="updateItem">
                                <label>Topping name</label>
                                <input type="text" placeholder='Topping Name'/>
                            </div>
                            <div className="updateItem">
                                <label>Price</label>
                                <input type="text" placeholder='Price' />
                            </div>
                            <div className="updateItem">
                                <label>Description</label>
                                <input type="text" placeholder='Description'  />
                            </div>
                            <div className="updateItem">
                                <label>Topping Status</label>
                                <select name="active" id="active">
                                    <option value={true}>Hoạt Động</option>
                                    <option value={false}>Không Hoạt Động</option>
                                </select>
                            </div>
                        </div>
                        <div className="right">
                            <div className="upload">
                                <label htmlFor="file"><img src="{imageTopping}" alt="{toppingUp.toppingName}"  /> </label>
                                <label ><Publish className='publish' /></label>
                                <input type="file" id="file" style={{ display: 'none' }} />
                            </div>
                        </div>
                        <button >Update</button>
                    </form>
                </div>
            </div>
        </div>
  )
}
