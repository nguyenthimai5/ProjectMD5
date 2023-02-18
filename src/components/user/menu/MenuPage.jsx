import React from 'react'
import BackToTop from '../backtotop/BackToTop'
import ContactInfor from '../contact/ContactInfor'
import Footer from '../footer/Footer'
import HeaderMain from '../header/HeaderMain'
import HeaderMenu from '../header/HeaderMenu'
import ListCustomerReviews from '../reviews/ListCustomerReviews'
import Seperatess from '../seperate/Seperatess'
import Menu from './Menu'


export default function MenuPage() {
  return (
   <>
   <HeaderMain/>
   <HeaderMenu/>
   <Menu/>
   <Seperatess/>
   <ListCustomerReviews/>
   <ContactInfor/>
   <Footer/>
   <BackToTop/>
   </>
  )
}
