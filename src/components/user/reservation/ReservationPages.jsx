import React from 'react'
import BackToTop from '../backtotop/BackToTop'
import ContactInfor from '../contact/ContactInfor'
import Footer from '../footer/Footer'
import HeaderMain from '../header/HeaderMain'
import HeaderReservation from '../header/HeaderReservation'
import Reservation from './Reservation'


export default function ReservationPages() {
  return (
    <>
    <HeaderMain/>
    <HeaderReservation/>
    <Reservation/>
    <ContactInfor/>
    <Footer/>
    <BackToTop/>
    </>
  )
}
