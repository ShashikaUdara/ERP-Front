import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function SignUp() {
  const [show, setShow] = useState(false);

  const [showSignUp, setShowSignUp] = useState(false);

  const handleCloseSignUp = () => setShowSignUp(false);

  return (
    <div>
        <Modal.Header closeButton>
        <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Control
                type="text"
                className="signupEmail"
                aria-describedby="signinEmail"
                placeholder="Name"
            />
            <Form.Control
                type="email"
                className="signupEmail"
                aria-describedby="signinEmail"
                placeholder="Email"
            />
            <Form.Control
                type="password"
                className="signupPassword"
                aria-describedby="signinPassword"
                placeholder="Password"
            />
            <Form.Control
                type="password"
                className="signupConfirmPassword"
                aria-describedby="signinPassword"
                placeholder="Confirm Password"
            />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-dark" onClick={handleCloseSignUp}>
            Close
        </Button>
        <Button variant="outline-dark">Sign me up</Button>
        </Modal.Footer>
      </div>
  );
}

export default SignUp;