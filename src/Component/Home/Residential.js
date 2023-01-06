import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Residen1 from "../Image/p_Recidential/Rectangle 46.jpg";
import Residen2 from "../Image/p_Recidential/Rectangle 47.jpg";
import Residen3 from "../Image/p_Recidential/Rectangle 48.jpg";
import Residen4 from "../Image/p_Recidential/Rectangle 49.jpg";

const Residential = () => {
  return (
    <div class="container text-center">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 my-5">
        <div class="col">
          <img className='w-75 rounded' src={Residen1} alt="" />
          <h5 className="mt-2">Living Room</h5>
        </div>
        <div class="col">
          <img className='w-75 rounded' src={Residen2} alt="" />
          <h5 className="mt-2">Drawing Room</h5>
        </div>
        <div class="col">
          <img className='w-75 rounded' src={Residen3} alt="" />
          <h5 className="mt-2">Kitchen Room</h5>
        </div>
        <div class="col">
          <img className='w-75 rounded' src={Residen4} alt="" />
          <h5 className="mt-3">Rest Room</h5>
        </div>
      </div>
    </div>
  );
};

export default Residential;
