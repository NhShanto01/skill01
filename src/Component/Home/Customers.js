import React from "react";
import { Carousel } from "react-bootstrap";
import "./Customers.css";
import { BsStarFill,BsStarHalf } from "react-icons/bs";

const Customers = () => {
  return (
    <Carousel fade className="text-center cust-div my-4 py-5 text-light">
      <Carousel.Item className="sm:mx-5">
        <img
          className="rounded-circle shadow-1-strong mb-4 cust-img"
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
          alt="First slide"
        />
        
        <p>"Thank you for making it painless, pleasant and most of all hassle free! Skill Interior should be nominated for service of the year.</p>
        <p> I would like to personally thank you for your outstanding product."</p>
        <span>< BsStarFill /></span>
        <span>< BsStarFill /></span>
        <span>< BsStarFill /></span>
        <span>< BsStarFill /></span>
        <span>< BsStarHalf /></span>
        <h2>Jemmy falcon</h2>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded-circle shadow-1-strong mb-4 cust-img"
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
          alt="Second slide"
        />
        <p>"Needless to say we are extremely satisfied with the results. I have gotten at least 50 times the value from Skill Interior.</p>
        <p>I would be lost without Skill interior. Keep up the excellent work."</p>
        <span>< BsStarFill /></span>
        <span>< BsStarFill /></span>
        <span>< BsStarFill /></span>
        <span>< BsStarFill /></span>
        <span>< BsStarHalf /></span>
        <h2>Jordi Alves</h2>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded-circle shadow-1-strong mb-4 cust-img"
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
          alt="Third slide"
        />
        <p>"It really saves me time and effort. Skill Interior is exactly what our business has been lacking. Skill Interior is the real deal!</p>
        <p> I STRONGLY recommend Skill Interior to EVERYONE interested in running a successful online business!"</p>
        <span>< BsStarFill /></span>
        <span>< BsStarFill /></span>
        <span>< BsStarFill /></span>
        <span>< BsStarFill /></span>
        <span>< BsStarHalf /></span>
        <h2>Kimi Smith</h2>
      </Carousel.Item>
    </Carousel>
  );
};

export default Customers;
