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
import { DataCatalogProviders } from '../../dummyData'

import UpdateCatalog from './pages/catalog/UpdateCatalog'


export default function AppAdimintest() {
  return (
    
    <>
    <DataCatalogProviders >
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
            <Route path='/catalog/editCatalog/:catalogId' element={<UpdateCatalog />} />
            <Route path='/newCatalog' element={<NewCatalog />} />

  
          </Routes>
        </div>
        </DataCatalogProviders>
    </>
  )
}
