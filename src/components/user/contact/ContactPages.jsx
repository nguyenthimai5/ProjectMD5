import React from 'react'
import BackToTop from '../backtotop/BackToTop'
import Footer from '../footer/Footer'
import HeaderContact from '../header/HeaderContact'
import HeaderMain from '../header/HeaderMain'
import Contact from './Contact'
import ContactInfor from './ContactInfor'


export default function ContactPages() {
  return (
    <>
    <HeaderMain/>
    <HeaderContact/>
    <Contact/>
    <ContactInfor/>
    <Footer/>
    <BackToTop/>
    </>
  )
}
