import React from "react";
import design from "../Image/i_Why Choose Skill/Group 11.svg";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="text-center skill-div-color">
      <div class="container p-5">
        <div class="row">
          <div class="col skill-col">
            <div className="d-flex justify-content-center align-items-center w-50 div-img-design">
              <div>
                <img className="img-design" src={design} alt="" />
              </div>

              <div className="ms-2">
                <span className="fw-bold skill-text">SKILLS </span>
                <p>GURANTEE</p>
              </div>

            </div>

          </div>

          <div class="col mt-3 skill-col sub-text">
            <div className="d-flex align-items-center">
              <div className="mx-3">
                  <span className="fw-bold skill-text">On-Time </span>
                <p className="text-light">
                  Delivery
                </p>
              </div>

              <div>
                <p className="fs-1 text-secondary">|</p>
              </div>

              <div className="mx-3">
                  <span className="fw-bold skill-text">Best </span>
                <p className="text-light">
                  Price
                </p>
              </div>

              <div>
                <p className="fs-1 text-secondary">|</p>
              </div>

              <div className="mx-3">
                  <span className="fw-bold skill-text">Superior </span>
                <p className="text-light">
                  Quality
                </p>
              </div>

              <div>
                <p className="fs-1 text-secondary">|</p>
              </div>

              <div className="mx-3">
                    
                <span className="fw-bold skill-text">Safety </span>
                <p className="text-light">
                  Assured
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
