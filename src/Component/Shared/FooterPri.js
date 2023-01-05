import React from 'react';
import mail from '../Image/i_Footer contact/Group 69.svg';
import phone from '../Image/i_Footer contact/Group 71.svg';
import logo from '../Image/logo/logo.svg';
import './FooterPri.css';

const FooterPri = () => {
    return (
        <div className='foot-bg my-5'>
            <div className='container d-flex justify-content-between align-items-center gx-1'>
                <div className=''>
                    <img className='foot-img' src={logo} alt="" />
                </div>
                <div>
                    <div>
                        <img src={mail} alt="" />
                        <a className='mx-3 mail-a'
                            href="Contact@skill-interior.com ">Contact@skill-interior.com </a>
                    </div>
                    <div className='d-block align-items-center'>
                        <img src={phone} alt="" />
                        <span className='mx-3'>+8801547859632</span>
                    </div>
                </div>
            </div>

            <div className='mx-5 text-start'>
                <p>At HomeLane, we bring together functionality and aesthetics to provide homeowners with customized and efficient home designs. Our designers specialize in home interior
                    designs and home decor, and help you create a personalized home to suit your lifestyle. From sophisticated living room designs to space-saving and clutter-free interior designs,
                    we are here to help you find the best home decor and home design to match your needs and style. All our products come with up to 10-year warranty along with unwavering support
                    and maintenance services. Explore thousands of inspiring interior designs or get a free estimate - it's all here on HomeLane.com, your one stop for complete home interiors.</p>
            </div>
        </div>
    );
};

export default FooterPri;