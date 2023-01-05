import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Comer1 from '../Image/P_Commercial/Rectangle 46.png';
import Comer2 from '../Image/P_Commercial/Rectangle 47.png';
import Comer3 from '../Image/P_Commercial/Rectangle 48.png';
import Comer4 from '../Image/P_Commercial/Rectangle 49.png';

const Commertial = () => {
    return (
        <CardGroup className="mx-5">

                <Card>
                    <Card.Img variant="top" className="w-75 d-block mx-auto" src={Comer1} />
                    <Card.Body>
                        {/* <Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text> */}
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Img variant="top" className="w-75 d-block mx-auto" src={Comer2} />
                    <Card.Body>
                        {/* <Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text> */}
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Img variant="top" className="w-75 d-block mx-auto" src={Comer3} />
                    <Card.Body>
                        {/* <Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text> */}
                    </Card.Body>

            </Card>
            
                <Card>
                    <Card.Img variant="top" className="w-75 d-block mx-auto" src={Comer4} />
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

export default Commertial;