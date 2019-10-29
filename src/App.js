import React, { useState, Fragment } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';
import { Container, Row, Col, Button, Modal, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(1);
  const [side, setSide] = useState('light');
  const [destroyed, setDestroyed] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sideHandler = side => {
    setSide(side);
  };
  const charSelectHandler = event => {
    const charId = event.target.value;
    setSelectedCharacter(charId);
  };

  const destructionHandler = () => {
    setDestroyed(true);
  };
  let content = (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col lg={2}>
            <CharPicker
              side={side}
              selectedChar={selectedCharacter}
              onCharSelect={charSelectHandler}
            />
          </Col>
          <Col lg={6}>
            <Character selectedChar={selectedCharacter} />
          </Col>
          <Col lg={4}>
            <button onClick={sideHandler.bind(this, 'light')}>
              Light Side
        </button>
            <button onClick={sideHandler.bind(this, 'dark')}>Dark Side</button>
            {side === 'dark' && (
              <button onClick={destructionHandler}>DESTROY!</button>
            )}
          </Col>

        </Row>
        <Row>
          <Button className='custom-button' variant="primary" onClick={handleShow}>
            Launch demo modal
      </Button>
        </Row>

        <Modal
          show={show}
          onHide={handleClose}
          size="xs"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body >Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Fragment>
  );

  if (destroyed) {
    content = <h1>Total destruction!</h1>;
  }
  return content;
}

export default App;
