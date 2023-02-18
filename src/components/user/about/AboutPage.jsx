import React from 'react'
import BackToTop from '../backtotop/BackToTop'
import ContactInfor from '../contact/ContactInfor'
import Footer from '../footer/Footer'
import HeaderAbout from '../header/HeaderAbout'
import HeaderMain from '../header/HeaderMain'
import Menu from '../menu/Menu'
import About from './About'


export default function AboutPage() {
  return (
    <>
    <HeaderMain/>
    <HeaderAbout/>
    <About/>
    <Menu/>
    <ContactInfor/>
    <Footer/>
    <BackToTop/>
    </>
  )
}
