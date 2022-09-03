import React, { Component } from "react";
import {Row, Col,Card,Button,Container} from "react-bootstrap"
import img1 from "./img-1.jpg"
import img2 from "./img-2.jpg"
import './Buy.css'
import { Link } from "react-router-dom";

import img3 from "./img-3.jpg"
export default class Buy extends Component {
  render() {
    return (
      <div className="main">
      <Container className="btn">
        <Row>
          <Col>
            <Card className="main-btn-grid">
              <Card.Img variant="top" src={img1}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" size="lg">
                      <Link to={"/buyform"} className="btn-btn-form">
                        PROCEED
                      </Link>
                    </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="main-btn-grid"  >
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" size="lg">
                      <Link to={"/buyform"} className="btn-btn-form">
                        PROCEED
                      </Link>
                    </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="main-btn-grid">
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" size="lg">
                      <Link to={"/buyform"} className="btn-btn-form">
                        PROCEED
                      </Link>
                    </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}
