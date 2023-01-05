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
            <CardGroup className="mx-5">

                <Card>
                    <Card.Img variant="top" className="img-size d-block mx-auto" src={days} />
                    <Card.Body>
                        {/* <Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text> */}
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Img variant="top" className="img-size d-block mx-auto" src={happiness} />
                    <Card.Body>
                        {/* <Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text> */}
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Img variant="top" className="img-size d-block mx-auto" src={design} />
                    <Card.Body>
                        {/* <Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text> */}
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Img variant="top" className="img-size d-block mx-auto" src={years} />
                    <Card.Body>
                        {/* <Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text> */}
                    </Card.Body>

                </Card>




            </CardGroup>
        </div>
    );
};

export default ChooseSkill;
