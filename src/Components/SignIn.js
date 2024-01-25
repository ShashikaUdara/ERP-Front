import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const apiUrl = process.env.REACT_APP_BASE_URL;

function SignIn() {
  const [show, setShow] = useState(false);


  const [showSignIn, setShowSignIn] = useState(false);

  const handleCloseSignIn = () => setShowSignIn(false);

  // ================================================================

  // State to manage the form data
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Event handler for form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Event handler for form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log('=================>:', formData);

    try {
      // Making the API call using fetch
      const response = await fetch(apiUrl + "/api/user/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Checking if the request was successful (status code 2xx)
      if (response.ok) {
        const data = await response.json();
        // Do something with the response data, e.g., store authentication token
        console.log('Login successful:', data);
      } else {
        // Handling errors for non-successful responses
        const errorData = await response.json();
        console.error('Login failed:', errorData);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  // ================================================================

  return (
    <div>
        <Modal.Header closeButton>
            <Modal.Title>Sign in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Control
                    type="text"
                    className="signinEmail"
                    aria-describedby="signinEmail"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <Form.Control
                    type="password"
                    className="signinPassword"
                    aria-describedby="signinPassword"
                    placeholder="Password"
                    name="password"
                    value={formData.pasword}
                    onChange={handleInputChange}
                />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-dark" onClick={handleCloseSignIn}>
                Close
            </Button>
            <Button variant="outline-dark" onClick={handleFormSubmit}>Sign me in</Button>
        </Modal.Footer>
      </div>
  );
}

export default SignIn;