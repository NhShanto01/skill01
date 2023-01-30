import React from "react";
import { Carousel } from "react-bootstrap";
import room from "../Image/i_shape/shap-img-1.png";
import "./EasySteps.css";

const EasySteps = () => {
  return (
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-5">
        <img className="img-R ms-5" src={room} alt="" />
      </div>
      <div className="col-7">
        <h3 className="easy-header pe-4 mt-4">Complete Home Interiors in 3 Easy Steps</h3>
        <Carousel variant="dark" className="caro-div text-center my-2 py-4 text-dark">

          <Carousel.Item className="pb-4">
            <h5>Discover</h5>
            <p className="px">
              "Thank you for making it painless, pleasant and most of all hassle
              free!
            </p>
          </Carousel.Item>

          <Carousel.Item className="pb-4">
            <h5>Options</h5>
            <p className="px">
              "Needless to say we are extremely satisfied with the results.
            </p>
            
          </Carousel.Item>
        </Carousel>
        
      </div>
    </div>
  );
};

export default EasySteps;