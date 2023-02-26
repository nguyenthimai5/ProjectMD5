import './newProduct.scss'
import React, { useEffect, useState } from 'react'
import { Publish } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux';
import { getDataCatalogsTrue } from '../../../../service/CatalogApi';
import { get_all_catalog_true } from '../../../../action/catalogaction';
import { ref, uploadBytes,getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../FireBase';
import { act_create_product } from '../../../../action/productaction';
import { useNavigate } from 'react-router-dom';

export default function NewProduct() {
  const listCatalog = useSelector(state => state.listCatalog);
  const [productName, setProductName] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [imageProduct, setImageProduct] = useState(null);
  const [productStatus, setProductStatus] = useState(true)

  const [catalogId, setCatalogId] = useState("");

  const dispatch = useDispatch();
  const navigate=useNavigate()
  useEffect(() => {
    getDataCatalogsTrue().then((res) =>
      dispatch(get_all_catalog_true(res.data))
    )
  }, [listCatalog])

  let elementCatalog = listCatalog?.map((catalog) => {
        return <option value={catalog.catalogId}>{catalog.catalogName}</option>
  })


  const handUpload = () => {
    if (imageProduct == null) return;
    const imageRef = ref(storage, `imageProducts/${imageProduct.name}`)
      uploadBytes(imageRef, imageProduct).then((snaphsot) =>{
      getDownloadURL(snaphsot.ref).then((url)=>{
        setImageProduct(url)
      })
    })

  }

  const handleCreate=()=>{
    console.log("liaaaaa",listCatalog);
    let catalogCreate=listCatalog?.filter(cat=>cat.catalogId==catalogId);
    console.log("catalogCreate",catalogCreate);
         let newProduct={productName,priceProduct,imageProduct,productStatus,catalog:catalogCreate[0]}
      dispatch(act_create_product(newProduct))
   navigate("/admintest/products")
  }

  return (
    <div className='newProductPage'>
      <h1 className='h1-new-user'>New Product</h1>
      <form>

        <div className="item">
          <label>Product Name</label>
          <input type="text" placeholder='Product Name' value={productName} onChange={(e) => setProductName(e.target.value)} />
        </div>
        <div className="item">
          <label>Price</label>
          <input type="number" placeholder='Price' value={priceProduct} onChange={(e) => setPriceProduct(e.target.value)} />
        </div>
        <div className="item activeContainer">
          <label>Catalog</label>
          <select name='active' id='active' value={catalogId} onChange={(e) => setCatalogId(e.target.value)}>
            {elementCatalog}
          </select>
        </div>
        <div className="item">
          <label>Image</label>
          <input type="file" id='file' onChange={(e) => {setImageProduct(e.target.files[0])}} />
          <img src={imageProduct} style={{ width: "100px", height: "75px", marginLeft: "170px", margin: "5px" }} />
          <label onClick={handUpload}><Publish className='publish' /></label>
        </div>
        <button onClick={handleCreate}>Create</button>
      </form>
    </div>
  )
}
