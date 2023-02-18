import React from 'react'
import BackToTop from '../backtotop/BackToTop'
import ContactInfor from '../contact/ContactInfor'
import Footer from '../footer/Footer'
import HeaderBlog from '../header/HeaderBlog'
import HeaderMain from '../header/HeaderMain'
import Blogw from './Blogw'


export default function BlogPage() {
  return (
    <>
    <HeaderMain/>
    <HeaderBlog/>
    <Blogw/>
    <ContactInfor/>
    <Footer/>
    <BackToTop/>
    </>
  )
}
