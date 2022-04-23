import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5">Our Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 py-3">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faGoogle}  className="icon"/>
              </div>
              <h2>SEO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                asperiores.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 py-3">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faFacebookF}  className="icon"/>
              </div>
              <h2>Facebook Marketing</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                asperiores.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 py-3">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faDesktop}  className="icon"/>
              </div>
              <h2>IT , Helpdesk</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                asperiores.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 py-3">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faFileCode}  className="icon"/>
              </div>
              <h2>Web Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                asperiores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
