import React from "react";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6" col-xm-12>
          <div className="photo-wrap mb-5">
            <img src="https://source.unsplash.com/random" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About me</h1>
          <p className="p-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            voluptates maxime ea dolorum commodi facilis hic excepturi. Veniam
            iusto vero saepe qui nemo voluptatum nostrum molestiae quos
            architecto dolorum praesentium, eveniet sapiente error esse dicta
            suscipit sed necessitatibus similique. Atque assumenda
            necessitatibus sit ullam eius possimus obcaecati cumque, tempora
            minima!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
