import React, { Component } from 'react'
import{Button, Form, Container, Row, Col} from 'react-bootstrap'
import './Buyform.css'
export default class Buyform extends Component {
  render() {
    return (
        <div className='main'>
        <Container>
        <Row>
        <Col></Col>
        <Col xs={6}><Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='btn-email'>Full Name</Form.Label>
          <Form.Control type="text" placeholder="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='btn-email'>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-btn">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form></Col>
        <Col></Col>
      </Row>
    </Container>
    </div>
    )
  }
}
