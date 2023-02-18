import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className="about-section-box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <img src="user/images/about-img.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-6 text-center">
                        <div className="inner-column">
                            <h1>
                                Welcome To <span>DRINKS</span>
                            </h1>
                            <h4>Little Story</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed
                                convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante
                                sodales augue, eget lacinia lectus erat et sem.{" "}
                            </p>
                            <p>
                                Sed semper orci sit amet porta placerat. Etiam quis finibus eros.
                                Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla
                                placerat elit in justo vestibulum, et maximus sem pulvinar.
                            </p>
                            <Link to="/reservationPages" className="btn btn-lg btn-circle btn-outline-new-white">
                            Reservation
                            </Link>
                            
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="inner-pt">
                            <p>
                                Sed tincidunt, neque at egestas imperdiet, nulla sapien blandit
                                nunc, sit amet pulvinar orci nibh ut massa. Proin nec lectus sed
                                nunc placerat semper. Duis hendrerit elit nec sapien porttitor, ut
                                pretium ipsum feugiat. Aenean volutpat porta nisi in gravida.
                                Curabitur pulvinar ligula sed facilisis bibendum. Nullam vitae nulla
                                elit.{" "}
                            </p>
                            <p>
                                Integer purus velit, eleifend eu magna volutpat, porttitor blandit
                                lectus. Aenean risus odio, efficitur quis erat eget, mattis
                                tristique arcu. Fusce in ante enim. Integer consectetur elit nec
                                laoreet rutrum. Mauris porta turpis nec tellus accumsan
                                pellentesque. Morbi non quam tempus, convallis urna in, cursus
                                mauris.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
