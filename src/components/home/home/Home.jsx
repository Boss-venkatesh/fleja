import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
       <section className='home'>
          <div className="container-fluid">
             <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="HomeContent">
                     <img src="./assets/home.png" alt="" className='manImage' />
                   </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="conatiner flex">
                      <h1>I AM A <br/> WEB DESINGER</h1>
                      <div className="socialIcon">
                        <i className='fab fa-facebook-f facebook'></i>
                        <i className='fab fa-instagram instagram'></i>
                        <i className='fab fa-twitter twitter'></i>
                        <i className='fab fa-youtube youtube'></i>
                        <i className='fab fa-pinterest pinterest'></i>
                        <i className='fab fa-dribbble dribbble'></i>
                     </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia fugit nostrum vero inventore quidem nisi alias delectus, molestiae possimus maxime ipsum nam omnis velit error at earum dolor cupiditate.</p>
                        <button className="primary-btn">Contact US</button>
                    </div>
                </div>
             </div>
          </div>
       </section>
    </>
  )
}

export default Home
