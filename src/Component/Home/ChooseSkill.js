import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./ChooseSkill.css";
import days from '../Image/i_Why Choose Skill/Group 7.svg';
import happiness from '../Image/i_Why Choose Skill/Group 8.svg';
import design from '../Image/i_Why Choose Skill/Group 11.svg';
import years from '../Image/i_Why Choose Skill/Group 158.svg';

const ChooseSkill = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mx-5 my-5 g-4 text-center">

                <div className="col">
                    <Card.Img variant="top" className="img-size d-block mx-auto" src={days} />
                    <Card.Body className="mt-3">
                        <Card.Text>
                        45 Dayes or
We pay your rent
                        </Card.Text>
                    </Card.Body>

                </div>

                <div className="col">
                    <Card.Img variant="top" className="img-H d-block mx-auto" src={happiness} />
                    <Card.Body  className="mt-4">
                        <Card.Text>
                        150+ Happy
Customer
                        </Card.Text>
                    </Card.Body>

                </div>

                <div className="col">
                    <Card.Img variant="top" className="d-block mx-auto img-D" src={design} />
                    <Card.Body className="mt-1">
                        <Card.Text>
                        100+ Design
Experties
                        </Card.Text>
                    </Card.Body>

                </div>

                <div className="col">
                    <Card.Img variant="top" className="d-block mx-auto img-Y" src={years} />
                    <Card.Body className="mt-3">
                        <Card.Text>
                        Upto 10 Years
Material Warranty
                        </Card.Text>
                    </Card.Body>

                </div>




            </div>
        </div>
    );
};

export default ChooseSkill;
