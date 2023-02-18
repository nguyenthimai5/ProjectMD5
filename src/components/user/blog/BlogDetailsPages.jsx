import React from 'react'
import BackToTop from '../backtotop/BackToTop'
import ContactInfor from '../contact/ContactInfor'
import Footer from '../footer/Footer'
import HeaderBlog from '../header/HeaderBlog'
import HeaderMain from '../header/HeaderMain'
import BlogSingerDetail from './BlogSingerDetail'


export default function BlogDetailsPages() {
  return (
    <>
    <HeaderMain/>
    <HeaderBlog/>
    <BlogSingerDetail/>
    <ContactInfor/>
    <Footer/>
    <BackToTop/>
    </>
  )
}
