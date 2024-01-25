import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

import "../Assets/Custom.css"

import SignIn from './SignIn';
import SignUp from './SignUp';

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_BASE_URL;

function NavigationMenu() {

  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);
  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);

  console.log(apiKey);
  console.log(apiUrl);

  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex nav-search">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark"><FontAwesomeIcon icon={faSearch} /></Button>
              </Form>
            </Navbar.Collapse>
            <div>
                <Button className="nav-signin" variant="outline-dark" onClick={handleShowSignIn}><FontAwesomeIcon icon={faSignInAlt} /></Button>
                <Button className="nav-signup" variant="outline-dark" onClick={handleShowSignUp}><FontAwesomeIcon icon={faUserPlus} /></Button>
            </div>

          </Container>
        </Navbar>
        <Modal
            show={showSignIn}
            onHide={handleCloseSignIn}
            backdrop="static"
            keyboard={false}><SignIn/></Modal>
        <Modal show={showSignUp}
            onHide={handleCloseSignUp}
            backdrop="static"
            keyboard={false}><SignUp/></Modal>
    </>
  );
}

export default NavigationMenu;