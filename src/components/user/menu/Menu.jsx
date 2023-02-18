import React from 'react'
import ListProduct from '../product/ListProduct'

export default function Menu() {
    return (
        <div className="menu-box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-title text-center">
                            <h2>Special Menu</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="special-menu text-center">
                            <div className="button-group filter-button-group">
                                <button className="active" data-filter="*">
                                    All
                                </button>
                                <button data-filter=".drinks">Drinks</button>
                                <button data-filter=".lunch">Lunch</button>
                                <button data-filter=".dinner">Dinner</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ListProduct */}
                <ListProduct/>
            </div>
        </div>

    )
}
