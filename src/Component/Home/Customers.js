import React from "react";
import { Carousel } from "react-bootstrap";
import "./Customers.css";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Customers = () => {
  return (
    <Carousel fade className="text-center cust-div my-4 py-5 text-light">
      {/* <div class="customer-indicators">
        <button
          type="button"
          data-bs-target=""
          aria-label="Slide 1"
          aria-current="true"
          fdprocessedid="gj1v9"
          class="active"
        ></button>
        <button
          type="button"
          data-bs-target=""
          aria-label="Slide 2"
          aria-current="false"
          fdprocessedid="nivn64"
        ></button>
        <button
          type="button"
          data-bs-target=""
          aria-label="Slide 3"
          aria-current="false"
          fdprocessedid="tmlkiq"
        ></button>
      </div> */}
      <Carousel.Item className="px-5">
        <img
          className="rounded-circle shadow-1-strong mb-4 cust-img"
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
          alt="First slide"
        />

        <p className="px-5">
          "Thank you for making it painless, pleasant and most of all hassle
          free!
        </p>
        <p className="px-5">
          {" "}
          Skill Interior should be nominated for service of the year."
        </p>
        <span>
          <BsStarFill />
        </span>
        <span>
          <BsStarFill />
        </span>
        <span>
          <BsStarFill />
        </span>
        <span>
          <BsStarFill />
        </span>
        <span>
          <BsStarHalf />
        </span>
        <h2>Jemmy falcon</h2>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded-circle shadow-1-strong mb-4 cust-img"
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
          alt="Second slide"
        />
        <p className="px-5">
          "Needless to say we are extremely satisfied with the results.
        </p>
        <p className="px-5">
          I have gotten at least 50 times the value from Skill Interior."
        </p>
        <span>
          <BsStarFill />
        </span>
        <span>
          <BsStarFill />
        </span>
        <span>
          <BsStarFill />
        </span>
        <span>
          <BsStarFill />
        </span>
        <span>
          <BsStarHalf />
        </span>
        <h2>Jordi Alves</h2>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded-circle shadow-1-strong mb-4 cust-img"
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
          alt="Third slide"
        />
        <p className="px-5">
          "Skill Interior should be nominated for service of the year. Very easy
          to use.
        </p>
        <p className="px-5">
          It's really wonderful. We've used Skill Interior for the last five
          years."
        </p>
        <span>
          <BsStarFill />
        </span>
        <span>
          <BsStarFill />
        </span>
        <span>
          <BsStarFill />
        </span>
        <span>
          <BsStarFill />
        </span>
        <span>
          <BsStarHalf />
        </span>
        <h2>Kimi Smith</h2>
      </Carousel.Item>
    </Carousel>
  );
};

export default Customers;
