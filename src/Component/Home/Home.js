import React from 'react';
import FooterPri from '../Shared/FooterPri';
import FooterSec from '../Shared/FooterSec';
import ChooseSkill from './ChooseSkill';
import Commertial from './Commertial';
import Customers from './Customers';
import EMI from './EMI';
import Exchange from './Exchange';
import Hero from './Hero';
import InterirSolution from './InterirSolution';
import PaysFriend from './PaysFriend';
import Residential from './Residential';
import Services from './Services';
import Tranding from './Tranding';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <p className='text-center mt-3 fs-4 fw-bold'>Why Choose Skill?</p>
            <ChooseSkill></ChooseSkill>
            <p className='text-center mt-3 fs-4 fw-bold'>Stay Safe & Design Virtually</p>

            <Services></Services>
            <hr className="text-dark"></hr>
            <p className='text-center my-4 fs-4 fw-bold'>Residential</p>
            <Residential></Residential>
            <hr className="text-dark"></hr>
            <p className='text-center my-4 fs-4 fw-bold'>Commertial</p>
            <Commertial></Commertial>
            <EMI></EMI>
            <PaysFriend></PaysFriend>
            <Exchange></Exchange>
            <hr></hr>
            <Tranding></Tranding>
            
            <Customers></Customers>
            <hr />
            <h3 className='text-center mt-5'>End-to-End Interior Solution</h3>
            <InterirSolution></InterirSolution>
            <FooterPri></FooterPri>
            <hr />
            <FooterSec></FooterSec>
            
        </div>

    );
};

export default Home;
