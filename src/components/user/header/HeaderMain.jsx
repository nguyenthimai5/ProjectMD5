import React from 'react'
import { Link } from 'react-router-dom';

export default function HeaderMain() {
  return (
    <>
      <header className="top-navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src="https://images.squarespace-cdn.com/content/v1/5a984b5fb27e397fe7568458/1519941896981-OGIKZAQGMI194LTTHXAK/drinks-logo-header.png?format=1500w" alt="" className="image-logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbars-rs-food"
              aria-controls="navbars-rs-food"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbars-rs-food">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/user" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/user/menupage" className="nav-link">
                    Menu
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="/user/aboutpage" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown-a"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdown-a">
                    <Link to="/user/reservationPages" className="dropdown-item">
                      Reservation
                    </Link>
                    <Link to="/user/gallerypage" className="dropdown-item">
                      Gallery
                    </Link>

                  </div>
                </li>
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown-a"
                    data-toggle="dropdown"
                  >
                    Blog
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdown-a">
                    <Link to="/blogpage" className="dropdown-item">
                      Blog
                    </Link>
                    <Link to="/blogDetailPage" className="dropdown-item">
                      Blog Single
                    </Link>

                  </div>
                </li> */}
                <li className="nav-item">
                  <Link to="/user/contactpage" className="nav-link">
                    Contact
                  </Link>

                </li>
                <li className="nav-item">
                  <Link to="/user/cart" className="nav-link">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/user/userDetail" className="nav-link">
                    <img src="https://cuongquach.com/wp-content/uploads/2016/05/linux-logo-356x220.png" alt="" className="image-user" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
