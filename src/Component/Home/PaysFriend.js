import React from "react";
import paysfri from "../Image/i_it pays to have friend/Group 273.svg";
import "./PaysFriend.css";

const PaysFriend = () => (
  <div className="pays-color d-flex justify-content-center mt-5 py-5">
    <div className="">
    <div className="">
      <img className="pays-img mb-2" src={paysfri} alt="" />
    </div>
    </div>
    <div className="">
      <div className="ms-5">
        <p className="fs-2">It Pays to have friend</p>
        <p>Earn money every time your friend try Skill Interior</p>
        <button className="hero-btn">Refar Now</button>
      </div>
    </div>
    {/* "<div class=\"container py-2 d-flex flex-column\">\n    
    <h5>Resize browser for row re-order demo...</h5>\n   
         <div class=\"row order-sm-last order-md-0\">\n        
         <div class=\"col-12\">ami</div>\n   
        </div>\n   
        <div class=\"row\">\n       
        <div class=\"col-12\">tmi</div>\n    
        </div>\n</div>" */}
  </div>
);

export default PaysFriend;
