import React from 'react';
import './Exchange.css';
import exchange from '../Image/i_Exchnage/Group 157.svg';

const Exchange = () => {
    return (
        <div className='exc-position div-color row d-flex justify-content-center align-items-center my-5'>

            <div className='col-5'>
                <img className='exc-img-position' src={exchange} alt="" />
            </div>

            <div className='text-light text-end py-4 col-7'>
            <h3 className='mx-5'>EXCHANGE YOUR FURNITURE</h3>
            <p className='mx-5 me-5'>The moment your EMI scheme is in action, your bank will temporarily block an amount equal to the value of the purchase you made through the EMI option. Your bank will start increasing your credit limit by the amount equal to your monthly EMI as you start paying back.</p>
            </div>
            
        </div>
    );
};

export default Exchange