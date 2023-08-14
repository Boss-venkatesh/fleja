import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="container-fluid">
        <div className="row">
          <div className="container">
            <div className="row about-bottom">
              <div className="col-lg-6 col-md-6 col-12">
                <h4 className="about-title1">About me</h4>
                <h1 className="about-title2">Who I Am And What I Do</h1>
                <p className="about-p1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                  possimus quaerat quam dolorum ipsa laboriosam, repudia illum
                  amet inventore facilis, eius libero.
                </p>

                <p className="about-p2">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>

                <p className="about-p3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <button className="primary-btn">Contact US</button>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="box">
                  <img src="./assets/about.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
