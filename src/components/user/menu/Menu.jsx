import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_all_catalog_true } from '../../../action/catalogaction';

import { getDataCatalogsTrue } from '../../../service/CatalogApi';

import ListProduct from '../product/ListProduct'

export default function Menu() {
    const listCatalog = useSelector(state => state.listCatalog);
    const [catalogId, setCatalogId] = useState(0);
    const dispatch = useDispatch();


    useEffect(() => {
        getDataCatalogsTrue().then((res) =>
            dispatch(get_all_catalog_true(res.data))
        )
    }, [listCatalog])
 
    
    const handleClick = (e) => {
        setCatalogId(e.target.value);
        console.log("CatalogId", catalogId);


    }
    let elementCatalog = listCatalog?.map((catalog) => {
        return <button data-filter={catalog.catalogName} value={catalog.catalogId} onClick={(e) => handleClick(e)}>{catalog.catalogName}</button>
    })




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
                                {/* <button className="active" data-filter="*">
                                    All
                                </button> */}
                                {elementCatalog}
                            </div>
                        </div>
                    </div>
                </div>
                {/* ListProduct */}
                <ListProduct key={catalogId} catalogId={catalogId}  />
            </div>
        </div>

    )
}
