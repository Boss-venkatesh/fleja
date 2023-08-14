import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <>
    <section className='skills'>
       <div className="container-fluid">
         <div className="row mt-5">
            <div className="col-lg-12 col-md-12 col-12">
                <h5 className='skills-title1'>WHY CHOOSE US</h5>
                <h1 className='skills-title2'>Some Of My Skills</h1>
            </div>
         </div>

          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-12 col-12 mt-5">
                  <h5><span className='' style={{float:'left'}}>HTML</span> <span className='' style={{float:'right'}}>70%</span></h5><br />
                  <div className="progress">
                    <div className="progress-bar  bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}></div>
                  </div><br />

                  <h5><span className='' style={{float:'left'}}>CSS</span> <span className='' style={{float:'right'}}>80%</span></h5><br />
                  <div className="progress">
                    <div className="progress-bar  bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                  </div><br />

                  <h5><span className='' style={{float:'left'}}>Javascript</span> <span className='' style={{float:'right'}}>90%</span></h5><br />
                  <div className="progress">
                    <div className="progress-bar  bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}></div>
                  </div><br />

                  <h5><span className='' style={{float:'left'}}>React Js</span> <span className='' style={{float:'right'}}>70%</span></h5><br />
                  <div className="progress">
                    <div className="progress-bar  bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}></div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12 col-12 mt-5">
                    <div className='right'>
                    <h2>Every Day Is a New Challenge</h2>

                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque repellendus ratione officia voluptates. 
                      Ipsam nihil minus, nostrum ex enim tenetur ea explicabo, reprehenderit aperiam, 
                      beatae exercitationem iure eveniet a</p>

                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque repellendus 
                      ratione officia voluptates. Ipsam nihil minus, nostrum ex enim tenetur ea explicabo,
                        reprehenderit aperiam, beatae exercitationem iure eveniet a</p>

                        <div className='mb-5'>
                          <button className='primary-btn'>Hire Me</button>
                        </div>
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

export default Skills