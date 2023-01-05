import React from 'react';
import paysfri from '../Image/i_it pays to have friend/Group 273.svg';
import './PaysFriend.css';

const PaysFriend = () => (
    <div className='pays-color d-flex justify-content-center mt-5 py-5'>
        <div>
            <img className='pays-img' src={paysfri} alt="" />
        </div>
        <div className='ms-5'>
            <p className='fs-2'>It Pays to have friend</p>
            <p>Earn money every time your friend try Skill Interior</p>
            <button className='hero-btn'>Refar Now</button>
        </div>

    </div>
);

export default PaysFriend;