import React from 'react'
import ContactInfor from '../contact/ContactInfor'
import Footer from '../footer/Footer'
import HeaderMain from '../header/HeaderMain'
import HeaderReservation from '../header/HeaderReservation'
import Reservation from '../reservation/Reservation'

export default function Page() {
  return (
   <>
   <HeaderMain/>
   <HeaderReservation/>
   <Reservation/>
   <ContactInfor/>
   <Footer/>
   </>
  )
}
