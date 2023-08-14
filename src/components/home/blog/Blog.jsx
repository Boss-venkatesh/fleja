import React from 'react'
import './Blog.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function Blog() {
  return (
    <>
    <section className="blog">
        <div className="container-fluid">
            <div className="row">
                 <div className="col-lg-12 col-md-12 co-12 mt-5">
                    <h5 className='text-center'>LATEST BLOG</h5>
                 </div>
                 <div className="col-lg-12 col-md-12 col-12 my-1">
                    <h1 className='text-center'>Read Inspirational Story Every Week</h1>
                 </div>
            </div>

              <div className="container my-4 ">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-12">
                    <div className="card">
                        <img src="./assets/blog/blog1.jpg" alt="" />
                        <div className="card-body">
                            <span>26 FEB, 2019</span>
                            <h2 className="card-title">The Most Popular New top Business Apps</h2>
                            <a href="/">Read More
                                            <KeyboardDoubleArrowRightIcon className="icon"/></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12">
                    <div className="card">
                        <img src="./assets/blog/blog2.jpg" alt="" />
                        <div className="card-body">
                            <span>26 FEB, 2019</span>
                            <h2 className="card-title">The Best Marketing top Management Tools</h2>
                            <a href="/">Read More
                                            <KeyboardDoubleArrowRightIcon className="icon"/></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12">
                    <div className="card">
                        <img src="./assets/blog/blog3.jpg" alt="" />
                        <div className="card-body">
                        <span>26 FEB, 2019</span>
                            <h2 className="card-title">3 WooCommerce Plugins to Boost Sales</h2>
                            <a href="/">Read More
                                            <KeyboardDoubleArrowRightIcon className="icon"/></a>
                        </div>
                        </div>
                    </div>
                </div>
              </div>
        </div>
    </section>
    </>
  )
}

export default Blog