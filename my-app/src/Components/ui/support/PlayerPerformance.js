import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../Style/PlayerPerformance.css";
import records from "../../../records.json";

function PlayerPerformance() {
  return (
    <>
      <h1 className="text-danger mt-5 text-center">
        <u>Player Performance</u>
      </h1>
      {/* <Container> */}
      <div className="background">
        <Carousel>
          {records.map((record, index) => {
            return (
              <Carousel.Item interval={1000}>
                <Container>
                  <Row>
                    <Col xs={12} sm={6} md={6}>
                      <h1 className="mt-2 text-danger">{record.teamName}</h1>

                      {record.player.map((play, index) => {
                        return (
                          <div key={play.id}>
                            <h4 className="text-center text-light">
                              <u>{play.name}</u>
                            </h4>

                            <img
                              src={play.image}
                              alt="getty.jpg"
                              className="getty"
                            />
                          </div>
                        );
                      })}
                    </Col>

                    {record.player.map((play, index) => {
                      return (
                        <Col md={6} xs={12} sm={6} className="text-light mt-5">
                          <Row>
                            <Col>
                              <h5>Saves: {play.saves}</h5>
                            </Col>

                            <Col>
                              <h5>No.of goals: {play.goals}</h5>
                            </Col>
                          </Row>

                          <Row className="mt-5">
                            <Col>
                              <h5>Assests: {play.assests}</h5>
                            </Col>

                            <Col>
                              <h5>Red Cards: {play.redCard}</h5>
                            </Col>
                          </Row>

                          <Row className="mt-5">
                            <Col>
                              <h5>Defends: {play.defends}</h5>
                            </Col>

                            <Col>
                              <h5>Yellow Cards: {play.yellowcard}</h5>
                            </Col>
                          </Row>
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      {/* </Container> */}
    </>
  );
}
export default PlayerPerformance;
