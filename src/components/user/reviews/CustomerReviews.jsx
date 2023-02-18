import React from 'react'

export default function CustomerReviews() {
    return (
        <div className="carousel-item text-center active">
            <div className="img-box p-1 border rounded-circle m-auto">
                <img
                    className="d-block w-100 rounded-circle"
                    src="images/profile-1.jpg"
                    alt=""
                />
            </div>
            <h5 className="mt-4 mb-0">
                <strong className="text-warning text-uppercase">
                    Paul Mitchel
                </strong>
            </h5>
            <h6 className="text-dark m-0">Web Developer</h6>
            <p className="m-0 pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
                sem tempor, varius quam at, luctus dui. Mauris magna metus,
                dapibus nec turpis vel, semper malesuada ante. Idac bibendum
                scelerisque non non purus. Suspendisse varius nibh non aliquet.
            </p>
        </div>
    )
}
