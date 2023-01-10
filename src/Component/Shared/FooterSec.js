import React from 'react';
import fb from '../Image/i_Footer contact/Path 248.svg';
import insta from '../Image/i_Footer contact/Path 249.svg';
import twt from '../Image/i_Footer contact/Path 250.svg';
import ln from '../Image/i_Footer contact/Path 258.svg';
import './FooterSec.css';

const FooterSec = () => {
    return (
        <div>
            <div className='my-5 d-flex justify-content-center'>
            <div className='me-5'
            ><img src={fb} alt="" /></div>
            <div className='me-5'
            ><img src={insta} alt="" /></div>
            <div className='me-5'
            ><img src={twt} alt="" /></div>
            <div><img src={ln} alt="" /></div>
        </div>
        <div className='foot-bg'>
            <p className='text-center'>Developed by <a className='link' href='https://www.ztrios.com/'>Ztrios tech & Marketing LTD.</a>© 2023</p>
        </div>
       </div>
    );
};

export default FooterSec;