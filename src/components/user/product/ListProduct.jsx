import React from 'react'
import Product from './Product'


export default function ListProduct() {
    return (
        <div className="row special-list">
            <Product/>
            <div className="col-lg-4 col-md-6 special-grid drinks">
                <div className="gallery-single fix">
                    <img src="user/images/img-02.jpg" className="img-fluid" alt="Image" />
                    <div className="why-text">
                        <h4>Special Drinks 2</h4>
                        <p>Sed id magna vitae eros sagittis euismod.</p>
                        <h5> $9.79</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 special-grid drinks">
                <div className="gallery-single fix">
                    <img src="user/images/img-03.jpg" className="img-fluid" alt="Image" />
                    <div className="why-text">
                        <h4>Special Drinks 3</h4>
                        <p>Sed id magna vitae eros sagittis euismod.</p>
                        <h5> $10.79</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 special-grid lunch">
                <div className="gallery-single fix">
                    <img src="user/images/img-04.jpg" className="img-fluid" alt="Image" />
                    <div className="why-text">
                        <h4>Special Lunch 1</h4>
                        <p>Sed id magna vitae eros sagittis euismod.</p>
                        <h5> $15.79</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 special-grid lunch">
                <div className="gallery-single fix">
                    <img src="user/images/img-05.jpg" className="img-fluid" alt="Image" />
                    <div className="why-text">
                        <h4>Special Lunch 2</h4>
                        <p>Sed id magna vitae eros sagittis euismod.</p>
                        <h5> $18.79</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 special-grid lunch">
                <div className="gallery-single fix">
                    <img src="user/images/img-06.jpg" className="img-fluid" alt="Image" />
                    <div className="why-text">
                        <h4>Special Lunch 3</h4>
                        <p>Sed id magna vitae eros sagittis euismod.</p>
                        <h5> $20.79</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 special-grid dinner">
                <div className="gallery-single fix">
                    <img src="user/images/img-07.jpg" className="img-fluid" alt="Image" />
                    <div className="why-text">
                        <h4>Special Dinner 1</h4>
                        <p>Sed id magna vitae eros sagittis euismod.</p>
                        <h5> $25.79</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 special-grid dinner">
                <div className="gallery-single fix">
                    <img src="user/images/img-08.jpg" className="img-fluid" alt="Image" />
                    <div className="why-text">
                        <h4>Special Dinner 2</h4>
                        <p>Sed id magna vitae eros sagittis euismod.</p>
                        <h5> $22.79</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 special-grid dinner">
                <div className="gallery-single fix">
                    <img src="user/images/img-09.jpg" className="img-fluid" alt="Image" />
                    <div className="why-text">
                        <h4>Special Dinner 3</h4>
                        <p>Sed id magna vitae eros sagittis euismod.</p>
                        <h5> $24.79</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
