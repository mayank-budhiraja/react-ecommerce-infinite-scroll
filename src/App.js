import React from 'react';
import Header from './Components/Header';
import Upper from './Components/Upper';
import Content from './Components/Content';
import StickySide from './Components/StickySide';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.css';
import '../src/custom.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)
function App() {
  return (
    <div className="App">
    <Header sticky="top" />

      <Container fluid>
      
        <Row>
          
          <Col className="sidebar-style">
              <h5 className="filters-style"> Filters </h5>
            <StickySide />
          </Col>
        
          <Col xs={9}>
            <Upper />
            <Content />
          </Col>
        
        </Row>
      </Container>
    </div>
  );
}

export default App;
