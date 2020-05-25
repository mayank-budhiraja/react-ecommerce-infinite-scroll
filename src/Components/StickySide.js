import React from 'react';

//import StickyBox from 'react-sticky-box';
//import Sidebar from '../../Utils/Sidebar';
import {  Col, Row, Container, InputGroup } from 'react-bootstrap';

function StickySide(){
    return(
        <div>
            <Container fluid>
            <Row className="brand-row">
                <Col>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" className="brand-item" />
                </Col>
            </Row>

            <Row className="brand-row">
                <Col>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" className="brand-item" />
                </Col>
            </Row>

            <Row className="brand-row">
                <Col>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" className="brand-item" />
                </Col>
            </Row>

            <Row className="brand-row">
                <Col>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" className="brand-item" />
                </Col>
            </Row>

            <Row className="brand-row">
                <Col>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" className="brand-item" />
                </Col>
            </Row>
            </Container>

        </div>
    );
}

export default StickySide