import React from 'react';
import ChooseSkill from './ChooseSkill';
import Commertial from './Commertial';
import EMI from './EMI';
import Hero from './Hero';
import Residential from './Residential';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <p className='mt-3 fs-4 fw-bold'>Why Choose Skill?</p>
            <ChooseSkill></ChooseSkill>
            <p className='mt-3 fs-4 fw-bold'>Stay Safe & Design Virtually</p>

            <Services></Services>
            <hr className="text-dark"></hr>
            <p className='my-4 fs-4 fw-bold'>Residential</p>
            <Residential></Residential>
            <hr className="text-dark"></hr>
            <p className='my-4 fs-4 fw-bold'>Commertial</p>
            <Commertial></Commertial>
            <EMI></EMI>
        </div>
    );
};

export default Home;
