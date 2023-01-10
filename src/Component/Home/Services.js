import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import service1 from "../Image/i_Stay safe/Group 34.svg";
import service2 from "../Image/i_Stay safe/Group 43.svg";
import service3 from "../Image/i_Stay safe/Group 44.svg";

const Services = () => {
  return (
    <CardGroup className="mx-5">
      <Card>
        <Card.Img
          variant="top"
          className="w-75 d-block mx-auto pb-3"
          src={service1}
        />
        <Card.Body>
          <Card.Text className="text-center px-4 pt-3">
            <h4>Contactless Experience</h4>
            <p>
              No stepping out. Design your home interiors from the safety and
              comfort of your home.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          variant="top"
          className="w-75 d-block mx-auto"
          src={service3}
        />
        <Card.Body>
          <Card.Text className="text-center px-4 pt-1">
            <h4>Live 3D Design</h4>
            <p>
              Explore life-like 3D designs online that are made for your floor
              plan.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          variant="top"
          className="w-50 d-block mx-auto"
          src={service2}
        />
        <Card.Body>
          <Card.Text className="text-center px-4 pt-4">
            <h4>Instant Pricing</h4>
            <p>Enjoy complete price transparency and stay within budget.</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default Services;
