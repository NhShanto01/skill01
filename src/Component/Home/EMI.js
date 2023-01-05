import React from 'react';
import './EMI.css';
import emi from '../Image/i_EMI/Group 121.svg';

const EMI = () => {
    return (
        <div className='div-position div-color d-flex justify-content-center align-items-center'>
            <div className='text-light text-start py-4'>
            <h3 className='mx-5'>EMI SYSTEM</h3>
            <p className='mx-5 me-5'>The moment your EMI scheme is in action, your bank will temporarily block an amount equal to the value of the purchase you made through the EMI option. Your bank will start increasing your credit limit by the amount equal to your monthly EMI as you start paying back.</p>
            </div>
            <div>
                <img className='div-img-position' src={emi} alt="" />
            </div>
        </div>
    );
};

export default EMI;