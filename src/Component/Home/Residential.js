import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Residen1 from '../Image/p_Recidential/Rectangle 46.jpg';
import Residen2 from '../Image/p_Recidential/Rectangle 47.jpg';
import Residen3 from '../Image/p_Recidential/Rectangle 48.jpg';
import Residen4 from '../Image/p_Recidential/Rectangle 49.jpg';


const Residential = () => {
    return (
        <CardGroup className="mx-5">

                <Card>
                    <Card.Img variant="top" className="w-75 d-block mx-auto" src={Residen1} />
                    <Card.Body>
                        {/* <Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text> */}
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Img variant="top" className="w-75 d-block mx-auto" src={Residen2} />
                    <Card.Body>
                        {/* <Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text> */}
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Img variant="top" className="w-75 d-block mx-auto" src={Residen3} />
                    <Card.Body>
                        {/* <Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text> */}
                    </Card.Body>

            </Card>
            
                <Card>
                    <Card.Img variant="top" className="w-75 d-block mx-auto" src={Residen4} />
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

export default Residential;