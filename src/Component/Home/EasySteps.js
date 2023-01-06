import React from 'react';
import room from '../Image/i_shape/shap-img-1.png';
import './EasySteps.css';

const EasySteps = () => {
    return (
        <div className='row d-flex justify-content-center align-items-center gx-5'>
            <div className='col-5'>
                <img className='img-R ms-5' src={room} alt=""/>
            </div>
            <div className='col-7'>
                <h3>Complete Home Interiors in 3 Easy Steps</h3>
                <hr className='easy-hr'/>
                <h5>Discover</h5>
                <p>Explore more than just modular design ideas with our expert</p>
                
            </div>
        </div>
    );
};

export default EasySteps;