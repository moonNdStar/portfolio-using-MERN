import React, { Component } from "react";
import "./Sell.css";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
export default class Sell extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col></Col>

            <Col xs={6}>
            <h1 className="main-head-btn-sell">SELL TICKET</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="email-main">Event Name</Form.Label>
                  <Form.Control type="text" placeholder="enter event name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="btn-email">Venue</Form.Label>
                  <Form.Control type="email" placeholder="Enter venue" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="btn-email">Date&nbsp;</Form.Label>

                  <input type="date" id="birthday" name="birthday" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="btn-email">Time&nbsp;</Form.Label>

                  <input type="time" id="birthday" name="birthday" />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="btn-email">
                    Total no. of Tickets&nbsp;
                  </Form.Label>

                  <input
                    type="number"
                    id="birthday"
                    name="birthday"
                    min="1"
                    max="50"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="btn-email">
                    Price per Ticket &nbsp;
                  </Form.Label>

                  <select id="cars" name="cars">
                    <option value="volvo">ETHER</option>
                    <option value="saab">USD</option>
                    <option value="fiat" selected>
                      INR
                    </option>
                  </select>
                  <input
                    type="number"
                    id="birthday"
                    name="birthday"
                    min="50"
                    max="2000"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="btn-email">Choose a file to upload: &nbsp;</Form.Label>

                <input type="file" id="birthday" name="birthday" />
              </Form.Group>
              <div className="btn-btn-button">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                </div>
                </Form>
            </Col>
            <Col></Col>
          </Row>
          <br></br>
          
        </Container>
      </div>
    );
  }
}
