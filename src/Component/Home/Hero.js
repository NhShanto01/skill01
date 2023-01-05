
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import topImage from '../Image/P_top image/top.png';
import "./Hero.css";

const Hero = () => {
    return (
        <div>
            <Card className='hero-image'>
        <Card.Img variant="top" src={topImage} />
          
          <div className='text-on-image'>

          <p className='fs-2 text-light'>Get a Personalized</p>
          <h2 className='fs-2 text-light'>Interior Designer</h2>
          </div>
          <div className='input-on-image'>
          <div className='hero-bg'>
          <p className='fs-3'>Talk to a Designer</p>
          <input></input>
          <input></input>
          <button className='hero-btn'>BOOK FREE DESIGN SESSION</button>
          </div>


          </div>
      </Card>

        </div>
    );
};

export default Hero;