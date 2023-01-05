import React from 'react';
import Residen1 from '../Image/i_End_to_end/Group 51.svg';
import Residen2 from '../Image/i_End_to_end/layer1.svg';
import Residen3 from '../Image/i_End_to_end/Group 274.svg';
import Residen4 from '../Image/i_End_to_end/Layer -4.svg';
import Residen5 from '../Image/i_End_to_end/Layer 2.svg';
import Residen6 from '../Image/i_End_to_end/Layer -1.svg';
import Residen7 from '../Image/i_End_to_end/Layer -2.svg';
import Residen8 from '../Image/i_End_to_end/Layer -3.svg';

const InterirSolution = () => {
    return (
        <div class="container text-center">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 my-3">
                <div class="col">
                    <img src={Residen1} alt="" />
                    <h5 className='mt-2'>Modular kitchen</h5>
                </div>
                <div class="col">
                    <img src={Residen2} alt="" />
                    <h5 className='mt-2'>Storage and Wardrove</h5>
                </div>
                <div class="col">
                    <img src={Residen3} alt="" />
                    <h5 className='mt-2'>Crockery Unit</h5>
                </div>
                <div class="col">
                    <img src={Residen4} alt="" />
                    <h5 className='mt-3'>Space Saving Furniture</h5>
                </div>
                <div class="col">
                    <img src={Residen5} alt="" />
                    <h5 className='mt-2'>Table Lamp</h5>
                </div>
                <div class="col">
                    <img src={Residen6} alt="" />
                    <h5 className='mt-4'>Comfortable Sofa</h5>
                </div>
                <div class="col">
                    <img src={Residen7} alt="" />
                    <h5 className='mt-2'>Space Saving Bathtub</h5>
                </div>
                <div class="col">
                    <img src={Residen8} alt="" />
                    <h5 className='mt-2'>Modern Desk</h5>
                </div>

            </div>
            <button className='hero-btn'>BOOK FREE DESIGN SESSION</button>
        </div>
    );
};

export default InterirSolution;