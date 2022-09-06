import React from "react";
import { Carousel, Container, Row, Col, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import records from "../../../records.json";

function ScoreCard() {
  return (
    <>
      <h1 className="text-danger mt-5 text-center">
        <u>Score Card</u>
      </h1>

      <Row>
        <Col xs={12} sm={12} md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>Arizona Cardinals</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Save Goal---
              <h4>KELER MORAY-{12}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              Highest Score---
              <h4>KELER MORAY-{15}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              Assists---
              <h4>Manchester United-{20}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              Defence---
              <h4>Manchester United-{9}</h4>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* **********Another team********** */}
        <Col xs={12} sm={12} md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>Manchester United</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Save Goal---
              <h4>MORAY-{10}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              Highest Score---
              <h4>Stephen-{10}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              Highest Score---
              <h4>Midfielder-{10}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              Defence---
              <h4>Souting-{10}</h4>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}
export default ScoreCard;
