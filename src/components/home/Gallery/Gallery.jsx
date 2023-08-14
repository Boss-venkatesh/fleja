import React, { useState } from 'react'
import './Gallery.css'
import Data from "./Data"
import CloseIcon from '@material-ui/icons/Close';

function Gallery() {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('')
  const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc);
    setModel(true);
  }
  return (
    
     <>
       <section className='gallery1 '>
       <div className="container-fluid gallery1-bg">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
              <div className="text-center mt-5 mb-5">
                 <h6 >MY WORKS</h6>
                 <h1>Some of My Competed Projects</h1>
              </div>
          </div>
        </div>
        </div>

       <div className={model? "model open": "model"}>
         <img src={tempimgSrc} alt="" />
         <CloseIcon onClick={()=> setModel(false)}/>
       </div>
        <div className="gallery">
          {Data.map((item, index)=>{
             return(
                <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                  <img src={item.imgSrc} style={{width:'100%'}} alt="" />
                </div>
             )
          })}
        </div>
           
          
     </section>
       
     </>
     
  )
 

}

export default Gallery



{/* <div className="d-flex bd-highlight">
  <div className="p-2 flex-fill bd-highlight">
    <img src="./assets/work/work1.jpg" alt=""  className='gallery-img'/>
  </div>
  <div className="p-2 flex-fill bd-highlight">
  <img src="./assets/work/work1.jpg" alt="" className='gallery-img'/>
  </div>
  <div className="p-2 flex-fill bd-highlight">
  <img src="./assets/work/work1.jpg" alt="" className='gallery-img' />
  </div>
</div> */}