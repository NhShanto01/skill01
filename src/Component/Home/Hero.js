
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

          <p className='text-light'>Get a Personalized</p>
          <h2 className='text-light'>Interior Designer</h2>
          </div>
          <div className='input-on-image'>
          <div className='hero-bg'>
          <p className='sm-text'>Talk to a Designer</p>
          <input className='mb-2 hero-input' placeholder='Your Name'></input>
          <input className='hero-input' placeholder='Your Email'></input>
          
          <button className='hero-btn'>BOOK FREE DESIGN SESSION</button>
          </div>


          </div>
      </Card>

        </div>
    );
};

export default Hero;