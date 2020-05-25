import React, { useState } from 'react';
import { Container, Row, Col, Button, Collapse } from 'react-bootstrap';
import arrow from '../Assets/arrow-down.svg'; 

function Upper(){
    const [openBundle, setBOpen] = useState(false);
    const [openFabric, setFOpen] = useState(false);
    const [openLength, setLOpen] = useState(false);
    const [openNeck, setNOpen] = useState(false);

    return(
        <div>
            <Container fluid>
            <Row className="upper-style">
                <Col xs={12}>
                    <Row>
                    <Col xs={2}>
                        <Row>
                        <Button
                            variant="light"
                            onClick={() => setBOpen(!openBundle)}
                            aria-controls="example-collapse-text"
                            aria-expanded={openBundle}
                            className="upper-button"
                        >
                        Bundles
                        <img
                        src={arrow}
                        width="20"
                        height="20"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo "
                        />
                        </Button>
                        </Row>
                        
                        <div className="upper-filters">
                            <Collapse in={openBundle}>
                                <div id="example-collapse-text upper-filters">
                                Anim pariatur cliche reprehenderit
                                </div>
                            </Collapse>
                        </div>
                    </Col>
                    <Col xs={2}>
                    <Row>
                        <Button
                            variant="light"
                            onClick={() => setFOpen(!openFabric)}
                            aria-controls="example-collapse-text"
                            aria-expanded={openFabric}
                            className="upper-button"
                        >
                        Fabric
                        <img
                        src={arrow}
                        width="20"
                        height="20"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo "
                        />
                        </Button>
                        </Row>
                        <div className="upper-filters">
                            <Collapse in={openFabric}>
                                <div id="example-collapse-text upper-filters">
                                Anim pariatur cliche reprehenderit
                                </div>
                            </Collapse>
                        </div>
                    </Col>
                    <Col xs={2}>
                    <Row>
                        <Button
                            variant="light"
                            onClick={() => setLOpen(!openLength)}
                            aria-controls="example-collapse-text"
                            aria-expanded={openLength}
                            className="upper-button"
                        >
                        Length
                        <img
                        src={arrow}
                        width="20"
                        height="20"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo "
                        />
                        </Button>
                        </Row>
                        <div className="upper-filters">
                            <Collapse in={openLength}>
                                <div id="example-collapse-text upper-filters">
                                Anim pariatur cliche reprehenderit
                                </div>
                            </Collapse>
                        </div>
                    </Col>
                    <Col xs={2}>
                    <Row>
                        <Button
                            variant="light"
                            onClick={() => setNOpen(!openNeck)}
                            aria-controls="example-collapse-text"
                            aria-expanded={openNeck}
                            className="upper-button"
                        >
                        Neck
                        <img
                        src={arrow}
                        width="20"
                        height="20"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo "
                        />
                        </Button>
                        </Row>
                        <div className="upper-filters">
                            <Collapse in={openNeck}>
                                <div id="example-collapse-text upper-filters">
                                Anim pariatur cliche reprehenderit
                                </div>
                            </Collapse>
                        </div>
                    </Col>
                    </Row>
                </Col>    
            </Row>
        </Container>
        </div>
            );
}
           
export default Upper