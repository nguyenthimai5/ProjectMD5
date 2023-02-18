import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function ProductDetails() {
    const navigate=useNavigate();

    return (
        <>
        
        <div className="container-productDetails">
            <div className="background-element" id="background-element"></div>
            <div className="highlight-window" id="product-img" >
                <div className="highlight-overlay" id="highlight-overlay" />
            </div>
            <div className="window">
                <div className="main-content">
                    <h2>Tiger of Sweden</h2>
                    <h1>LEONARD COAT</h1>
                    <h3>MINIMALISTIC COAT IN COTTON-BLEND</h3>
                    <div className="description" id="description">
                        Men's minimalistic overcoat in cotton-blend. Features a stand-up collar,
                        concealed front closure and single back vent. Slim fit with clean,
                        straight shape. Above-knee length.
                    </div>
                    <div className="highlight-window  mobile" id="product-img">
                        <div className="highlight-overlay" id="highlight-overlay-mobile" />
                    </div>
                    <div className="options">
                        <div className="color-options">
                           {/* Topping */}
                            <div className="color-picker">
                                <label htmlFor="size" className="topping">Topping: </label>
                                <select id="size" name="size" className="color overlay">
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                            </div>
                            {/* <div className="color-picker">
                                <div className="color overlay" id="color-overlay">
                                    <div className="check" />
                                </div>
                                <div className="color color-a" id="color-a" />
                                <div className="color color-b" id="color-b" />
                            </div> */}
                            <span className="small" style={{ color: "#457" }}>
                                COLOR: <span id="color-name">BLUES / 2V5</span>
                            </span>
                        </div>
                        <div className="size-picker">
                            Size:
                            <div className="range-picker" id="range-picker">
                                <div className="active">44</div>
                                <div>46</div>
                                <div>48</div>
                                <div >50</div>
                                <div>52</div>
                                <div>54</div>
                            </div>
                            <a className="small align-right" href="#">
                                VIEW SIZE-CHART
                            </a>
                        </div>
                    </div>
                    <div className="divider" />
                    <div className="purchase-info">
                        <div className="price">£399.00</div>
                        <Link to="/user/cart">
                        <button>ADD TO CART</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
           
        </div>
         <button onClick={()=>navigate(-1)} >Back to page</button>
        </>
    )
}
