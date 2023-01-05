import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import service1 from '../Image/i_Stay safe/Group 34.svg';
import service2 from '../Image/i_Stay safe/Group 43.svg';
import service3 from '../Image/i_Stay safe/Group 44.svg';

const Services = () => {
    return (
       <CardGroup className="mx-5">

                <Card>
                    <Card.Img variant="top" className="w-75 d-block mx-auto" src={service1} />
                    <Card.Body>
                        {/* <Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text> */}
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Img variant="top" className="w-75 d-block mx-auto" src={service3} />
                    <Card.Body>
                        {/* <Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text> */}
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Img variant="top" className="w-50 d-block mx-auto" src={service2} />
                    <Card.Body>
                        {/* <Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text> */}
                    </Card.Body>

                </Card>

                
            </CardGroup> 
    );
};

export default Services;