import React from 'react';
import ChooseSkill from './ChooseSkill';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <p className='mt-3 fs-4 fw-bold'>Why Choose Skill?</p>
            <ChooseSkill></ChooseSkill>
        </div>
    );
};

export default Home;