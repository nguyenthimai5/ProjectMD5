import React from 'react'
import BackToTop from '../backtotop/BackToTop'
import ContactInfor from '../contact/ContactInfor'
import Footer from '../footer/Footer'
import HeaderGallery from '../header/HeaderGallery'
import HeaderMain from '../header/HeaderMain'
import ListCustomerReviews from '../reviews/ListCustomerReviews'
import Gallery from './Gallery'


export default function GalleryPages() {
  return (
    <>
    <HeaderMain/>
    <HeaderGallery/>
    <Gallery/>
    <ListCustomerReviews/>
    <ContactInfor/>
    <Footer/>
    <BackToTop/> 
    </>
  )
}
