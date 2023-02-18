import React from 'react'
import { Carousel } from 'antd';
const contentStyle = {
    height: '600px',
    width:'1400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
export default function Slides() {
    
    return (
        // <div id="slides" className="cover-slides">
        //     <ul className="slides-container">
        //         <li className="text-center">
                    // <img src="images/slider-01.jpg" alt="" />
        //             <div className="container">
        //                 <div className="row">
        //                     <div className="col-md-12">
        //                         <h1 className="m-b-20">
        //                             <strong>
        //                                 Welcome To <br /> Yamifood Restaurant
        //                             </strong>
        //                         </h1>
        //                         <p className="m-b-40">
        //                             See how your users experience your website in realtime or view{" "}
        //                             <br />
        //                             trends to see any changes in performance over time.
        //                         </p>
        //                         <p>
        //                             <a
        //                                 className="btn btn-lg btn-circle btn-outline-new-white"
        //                                 href="#"
        //                             >
        //                                 Reservation
        //                             </a>
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className="text-center">
        //             <img src="images/slider-02.jpg" alt="" />
        //             <div className="container">
        //                 <div className="row">
        //                     <div className="col-md-12">
        //                         <h1 className="m-b-20">
        //                             <strong>
        //                                 Welcome To <br /> Yamifood Restaurant
        //                             </strong>
        //                         </h1>
        //                         <p className="m-b-40">
        //                             See how your users experience your website in realtime or view{" "}
        //                             <br />
        //                             trends to see any changes in performance over time.
        //                         </p>
        //                         <p>
        //                             <a
        //                                 className="btn btn-lg btn-circle btn-outline-new-white"
        //                                 href="#"
        //                             >
        //                                 Reservation
        //                             </a>
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className="text-center">
        //             <img src="images/slider-03.jpg" alt="" />
        //             <div className="container">
        //                 <div className="row">
        //                     <div className="col-md-12">
        //                         <h1 className="m-b-20">
        //                             <strong>
        //                                 Welcome To <br /> Yamifood Restaurant
        //                             </strong>
        //                         </h1>
        //                         <p className="m-b-40">
        //                             See how your users experience your website in realtime or view{" "}
        //                             <br />
        //                             trends to see any changes in performance over time.
        //                         </p>
        //                         <p>
        //                             <a
        //                                 className="btn btn-lg btn-circle btn-outline-new-white"
        //                                 href="#"
        //                             >
        //                                 Reservation
        //                             </a>
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </li>
        //     </ul>
        //     <div className="slides-navigation">
        //         <a href="#" className="next">
        //             <i className="fa fa-angle-right" aria-hidden="true" />
        //         </a>
        //         <a href="#" className="prev">
        //             <i className="fa fa-angle-left" aria-hidden="true" />
        //         </a>
        //     </div>
        // </div>
        
       
       
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>
              <img src="images/bgr.jpg" alt="" />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
       

    )
}
