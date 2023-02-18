import React from 'react'
import About from '../about/About'
import BackToTop from '../backtotop/BackToTop'
import ContactInfor from '../contact/ContactInfor'
import Footer from '../footer/Footer'
import Gallery from '../gallery/Gallery'
import HeaderMain from '../header/HeaderMain'
import Menu from '../menu/Menu'
import ListCustomerReviews from '../reviews/ListCustomerReviews'
import Seperatess from '../seperate/Seperatess'
import Slides from '../slides/Slides'


export default function Home() {
  return (
    <>
    <HeaderMain/>
    <Slides/>
    <About/>
    <Seperatess/>
    <Menu/>
    <Gallery/>
    <ListCustomerReviews/>
    <ContactInfor/>
    <Footer/>
    <BackToTop/>
    </>
  )
}
