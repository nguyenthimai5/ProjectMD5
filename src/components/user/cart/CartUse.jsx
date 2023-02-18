import React from 'react'


export default function CartUse() {
    return (
        <> <hr className="my-4" />
            <div className="row">
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    {/* Image */}
                    <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                    >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                            className="w-100"
                            alt="Blue Jeans Jacket"
                        />
                        <a href="#!">
                            <div
                                className="mask"
                                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                            />
                        </a>
                    </div>
                    {/* Image */}
                </div>
                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    {/* Data */}
                    <p>
                        <strong>Blue denim shirt</strong>
                    </p>
                    <p>Color: blue</p>
                    <p>Size: M</p>
                    <button
                        type="button"
                        className="btn btn-primary btn-sm me-1 mb-2"
                        data-mdb-toggle="tooltip"
                        title="Remove item"
                    >
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z"></path></g></svg>
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger btn-sm mb-2"
                        data-mdb-toggle="tooltip"
                        title="Move to the wish list"
                    >
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path></svg>                      </button>
                    {/* Data */}
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    {/* Quantity */}
                    <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                        {/* <button
                                            className="btn btn-primary px-3 me-2"
                                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                        >
                                            <i className="fas fa-minus" />
                                        </button> */}
                        <div className="form-outline">
                            <input
                                id="form1"
                                min={0}
                                name="quantity"
                                defaultValue={1}
                                type="number"
                                className="form-control"
                                style={{textAlign:"center",width:"90px",marginRight:"2px"}}
                            />
                            <label className="form-label" htmlFor="form1">
                                Quantity
                            </label>
                        </div>
                        {/* <button
                                            className="btn btn-primary px-3 ms-2"
                                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                        >
                                            <i className="fas fa-plus" />
                                        </button> */}
                    </div>
                    {/* Quantity */}
                    {/* Price */}
                    <p className="text-start text-md-center">
                        <strong>$17.99</strong>
                    </p>
                    {/* Price */}
                </div>
            </div>
        </>
    )
}
