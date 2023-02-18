import React from 'react'
import { Link } from 'react-router-dom';

export default function Product() {
    return (
        <div className="col-lg-4 col-md-6 special-grid drinks">
            <div className="gallery-single fix">
                <Link to='/user/productDetails'>
                    <img src="user/images/img-01.jpg" className="img-fluid" alt="Image" />
                </Link>

                <div className="why-text">
                    <Link to='/user/productDetails'>
                        <h4>Special Drinks 1</h4>
                    </Link>
                    <Link to='/user/productDetails'>
                        <p>Sed id magna vitae eros sagittis euismod.</p>
                    </Link>
                    <Link to='/user/productDetails'>
                        <h5> $7.79</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}
