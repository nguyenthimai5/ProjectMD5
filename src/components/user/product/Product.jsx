import React from 'react'
import { Link } from 'react-router-dom';

export default function Product(props) {
    const {product}=props;
   
    
    
       return (
        <div className="col-lg-4 col-md-6 special-grid drinks">
            <div className="gallery-single fix">
                <Link to='/user/productDetails'>
                    <img src={product.imageProduct} className="img-fluid" alt={product.productName} style={{width:"350px",height:"250px"}} />
                </Link>

                <div className="why-text">
                    <Link to='/user/productDetails'>
                        <h4>{product.productName}</h4>
                    </Link>
                    <Link to='/user/productDetails'>
                        <p>Sed id magna vitae eros sagittis euismod.</p>
                    </Link>
                    <Link to='/user/productDetails'>
                        <h5>{product.priceProduct}$</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}
