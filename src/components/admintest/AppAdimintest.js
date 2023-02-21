import React from 'react'
import Topbar from '../admintest/components/topbar/Topbar'
import Sidebar from '../admintest/components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from '../admintest/pages/home/Home'
import FeaturedInfo from '../admintest/components/featuredInfo/FeaturedInfo'
import WidgetLg from '../admintest/components/widgetLg/WidgetLg'
import UserList from '../admintest/pages/userList/UserList'
import User from '../admintest/pages/user/User'
import NewUser from '../admintest/pages/newUser/NewUser'
import ProductList from '../admintest/pages/productList/ProductList'
import Product from '../admintest/pages/product/Product'
import NewProduct from '../admintest/pages/newProduct/NewProduct'
import './styles/app.scss'
import ListCatalog from './pages/listCatalog/ListCatalog'

import NewCatalog from './pages/newCatalog/NewCatalog'


import UpdateCatalog from './pages/catalog/UpdateCatalog'
import ListSize from './pages/size/ListSize'
import UpDateSize from './pages/size/UpDateSize'
import NewSize from './pages/size/NewSize'
import ListTopping from './pages/topping/ListTopping'
import UpdateTopping from './pages/topping/UpdateTopping'
import NewTopping from './pages/topping/NewTopping'


export default function AppAdimintest() {
  return (
    
    <>
   
    <Topbar/>
        <div className="containerApp">
          <Sidebar/>
          <Routes>        
            <Route path='/admin' element={<Home />} />
            <Route path='/featuredInfo' element={<FeaturedInfo/>}/>
            <Route path='/widgetLg' element={<WidgetLg/>}/>
            
            <Route path='/customers' element={<UserList />} />
            <Route path='/user/:userId' element={<User />} />
            <Route path='/newUser' element={<NewUser />} />
      
            <Route path='/products' element={<ProductList />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/newProduct' element={<NewProduct />} />

            <Route path='/catalog' element={<ListCatalog />} />
            <Route path='/catalog/editCatalog/:id' element={<UpdateCatalog />} />
            <Route path='/newCatalog' element={<NewCatalog />} />

            <Route path='/size' element={<ListSize />} />
            <Route path='/size/editSize/:id' element={<UpDateSize />} />
            <Route path='/newSize' element={<NewSize />} />

            <Route path='/topping' element={<ListTopping />} />
            <Route path='/topping/editTopping/:id' element={<UpdateTopping />} />
            <Route path='/newTopping' element={<NewTopping />} />

  
          </Routes>
        </div>
       
    </>
  )
}
