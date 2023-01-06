import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Comer1 from '../Image/P_Commercial/Rectangle 46.png';
import Comer2 from '../Image/P_Commercial/Rectangle 47.png';
import Comer3 from '../Image/P_Commercial/Rectangle 48.png';
import Comer4 from '../Image/P_Commercial/Rectangle 49.png';

const Commertial = () => {
    return (
        
        <div class="container text-center">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gx-5 my-5">
        <div class="col">
          <img className='w-75 rounded' src={Comer1} alt="" />
          <h5 className="mt-2">Living Room</h5>
        </div>
        <div class="col">
          <img className='w-75 rounded' src={Comer2} alt="" />
          <h5 className="mt-2">Drawing Room</h5>
        </div>
        <div class="col">
          <img className='w-75 rounded' src={Comer3} alt="" />
          <h5 className="mt-2">Kitchen Room</h5>
        </div>
        <div class="col">
          <img className='w-75 rounded' src={Comer4} alt="" />
          <h5 className="mt-3">Rest Room</h5>
        </div>
      </div>
    </div>
    );
};

export default Commertial;