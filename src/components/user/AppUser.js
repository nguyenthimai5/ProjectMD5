import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './about/AboutPage'
import BlogDetailsPages from './blog/BlogDetailsPages'
import BlogPage from './blog/BlogPage'
import ListCart from './cart/ListCart'
import ContactPages from './contact/ContactPages'
import GalleryPages from './gallery/GalleryPages'
import Home from './home/Home'
import Loginorlogout from './login/Loginorlogout'
import MenuPage from './menu/MenuPage'
import Page from './page/Page'
import ProductDetails from './product/ProductDetails'
import ReservationPages from './reservation/ReservationPages'
import CustomerDetail from './user/CustomerDetail'

export default function AppUser() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/aboutpage' element={<AboutPage />} />
                    <Route path='/blogpage' element={<BlogPage />} />
                    <Route path='/blogDetailPage' element={<BlogDetailsPages />} />
                    <Route path='/contactpage' element={<ContactPages />} />
                    <Route path='/gallerypage' element={<GalleryPages />} />
                    <Route path='/reservationPages' element={<ReservationPages />} />
                    <Route path='/menupage' element={<MenuPage />}> </Route>
                    <Route path='/productDetails' element={<ProductDetails />} />
                    <Route path='/loginorlogout' element={<Loginorlogout />} />
                    <Route path='/page' element={<Page />} />
                    <Route path='/cart' element={<ListCart />} />
                    <Route path='/userDetail' element={<CustomerDetail />} />

                </Routes>
            </div>

        </>
    )
}
