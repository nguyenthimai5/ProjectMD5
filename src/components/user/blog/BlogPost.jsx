import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogPost() {
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="blog-box-inner">
                <div className="blog-img-box">
                    <img className="img-fluid" src="images/blog-img-01.jpg" alt="" />
                </div>
                <div className="blog-detail">
                    <h4>Duis feugiat neque sed dolor cursus.</h4>
                    <ul>
                        <li>
                            <span>Post by Admin</span>
                        </li>
                        <li>|</li>
                        <li>
                            <span>27 February 2018</span>
                        </li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed
                        convallis arcu. Nullam facilisis, eros in eleifend luctus, odio
                        ante sodales augue, eget lacinia lectus erat et sem.{" "}
                    </p>
                    <p>
                        Sed semper orci sit amet porta placerat. Etiam quis finibus eros.{" "}
                    </p>
                    <Link to="/blogDetailPage" className="btn btn-lg btn-circle btn-outline-new-white">
                    Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}
