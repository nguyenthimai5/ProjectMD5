import './sidebar.scss'
import { Link,useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import sidebarNav from '../../configs/sidebarNav'

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const location = useLocation()

  useEffect(() => {
      const curPath = window.location.pathname.split('/')[1]
      const activeItem = sidebarNav.findIndex(item => item.section === curPath)

      setActiveIndex(curPath.length === 0 ? 0 : activeItem)
  }, [location])

  
  return (
    <div className="sidebarComponent">
       
            <div className="sidebarComponent__menu">
                <div className="box-avt-img">
                    <img src="https://i.ibb.co/xG2ygZT/btter.jpg" alt="adminPic" />
                </div>
                {
                    sidebarNav.map((nav, index) => (
                        <Link to={nav.link} key={`nav-${index}`} className={`sidebarComponent__menu__item ${activeIndex === index && 'active'}`} >
                            <div className="sidebarComponent__menu__item__icon">
                                {nav.icon}
                            </div>
                            <div className="sidebarComponent__menu__item__txt">
                                {nav.text}
                            </div>
                        </Link>
                    ))
                }
                <div className="sidebarComponent__menu__item">
                    <div className="sidebarComponent__menu__item__icon">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
                    </div>
                    <div className="sidebarComponent__menu__item__txt">
                        Logout
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Sidebar