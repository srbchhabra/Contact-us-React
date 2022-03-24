import React from 'react'
import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import styles from '../Components/style.css'

function FormsPage() {
  let formstyle={
    width:"auto",
    marginTop:"50px"
  }
  return (
    <Form style={formstyle} >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="Enter email or username" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember Me" />
  </Form.Group>
  <Button variant="primary" type="submit" style={{width:"-webkit-fill-available"}} >
    Submit
  </Button>
  <p id="footerstyle" >Don't have an acoount yet <a href="#!">Join lottery Display</a></p>
</Form>
  )
}

export default FormsPage