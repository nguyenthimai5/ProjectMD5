import { Publish } from '@mui/icons-material'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { get_all_catalog_true } from '../../../../action/catalogaction';
import { act_update_product } from '../../../../action/productaction';
import { storage } from '../../../../FireBase';
import { getDataCatalogsTrue } from '../../../../service/CatalogApi';
import './product.scss'
export default function UpdateProduct() {
    const productUpdate = useLocation().state;
    const [productName, setProductName] = useState(productUpdate.productName);
    const [priceProduct, setPriceProduct] = useState(productUpdate.priceProduct);
    const [imageProduct, setImageProduct] = useState(productUpdate.imageProduct);
    const [productStatus, setProductStatus] = useState(productUpdate.productStatus);
    const [catalogId, setCatalogId] = useState(productUpdate.catalog.catalogId);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const listCatalog = useSelector(state => state.listCatalog);
    useEffect(() => {
        getDataCatalogsTrue().then((res) => {
            dispatch(get_all_catalog_true(res.data))
        })
    }, [listCatalog])

    let elementCatalog = listCatalog?.map((catalog) => {
        return <option value={catalog.catalogId}>{catalog.catalogName}</option>
    })
    const handleUpload = () => {
        let imageRef = ref(storage, `imageProducts/${imageProduct.name}`)
        uploadBytes(imageRef, imageProduct).then((snaphsot) => {
            getDownloadURL(snaphsot.ref).then((url) => {
                setImageProduct(url)
            })
        })
    }
    const handleUpdate = () => {
        let cat = listCatalog?.filter(cat => cat.catalogId == catalogId)
        let productUp = { id: productUpdate.productId, productName, priceProduct, productStatus, imageProduct, catalog: cat[0] }
        dispatch(act_update_product(productUp))
        navigate(-1)

    }
    return (
        <div className='productPage'>
            <div className="titleContainer">
                <h1 className='content-h1'>Edit Product</h1>
            </div>
            <div className="userContainer">
                <div className="show">
                    <div className="top">
                        <img src={productUpdate.imageProduct} alt={productUpdate.productName} />
                        <div className="title">
                            <span className="username">{productUpdate.productName}</span>
                            <span className="userTitle">{productUpdate.priceProduct}</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <span className="title">PRODUCT DETAIL</span>
                        <div className="info">
                            Id:
                            <span className="infoTitle">{productUpdate.productId}</span>
                        </div>
                        <div className="info">
                            Product Name:
                            <span className="infoTitle">{productUpdate.productName}</span>
                        </div>


                        <div className="info">
                            Catalog:
                            <span className="infoTitle">{productUpdate.catalog.catalogName}</span>
                        </div>
                        <div className="info">
                            Price:
                            <span className="infoTitle">{productUpdate.priceProduct}</span>
                        </div>
                        <div className="info">
                            Status Product:
                            <span className="infoTitle">{productUpdate.productStatus ? "Còn Hàng" : "Hết Hàng"}</span>
                        </div>
                    </div>
                </div>
                <div className="update">
                    <span className="title">Edit</span>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="left">
                            <div className="updateItem">
                                <label>Product Name</label>
                                <input type="text" placeholder='Product Name' value={productName} onChange={(e) => setProductName(e.target.value)} />
                            </div>
                            <div className="updateItem">
                                <label>Price</label>
                                <input type="text" placeholder='Price' value={priceProduct} onChange={(e) => setPriceProduct(e.target.value)} />
                            </div>
                            <div className="updateItem">
                                <label>Catalog</label>
                                <select name="active" id="active" value={catalogId} onChange={(e) => setCatalogId(e.target.value)}>
                                    {elementCatalog}
                                </select>
                            </div>
                            <div className="updateItem">
                                <label>Product Status</label>
                                <select name="active" id="active" value={productStatus} onChange={(e) => setProductStatus(e.target.value)}>
                                    <option value={true}>Còn Hàng</option>
                                    <option value={false}>Hết Hàng</option>
                                </select>
                            </div>
                        </div>
                        <div className="right">
                            <div className="upload">
                                <label htmlFor="file"><img src={imageProduct} alt={productName} /> </label>
                                <input type="file" id="file" style={{ display: 'none' }} onChange={(e) => setImageProduct(e.target.files[0])} />
                                <label onClick={handleUpload}><Publish className='publish' /></label>
                            </div>
                        </div>
                        <button onClick={handleUpdate}>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
