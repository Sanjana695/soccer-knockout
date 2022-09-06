import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomCard from "../CustomCard";
import england from "../../../utils/england.png";
import brazel from "../../../utils/brazel.jpg";
import australia from "../../../utils/australia.jpg";
import india from "../../../utils/india.jpg";
import "../../../Style/UpcomingMatches.css";

function UpcomingMatches() {
  return (
    <>
      <h1 className="text-danger mt-5 text-center">
        <u>Upcoming Matches</u>
      </h1>
      <Container>
        <div className="bg-color">
          <Carousel>
            {/* *********brazel v/s england*********** */}
            <Carousel.Item interval={1000}>
              <Container>
                <Row>
                  <Col xs={12} sm={12} md={12}>
                    <Row className="square border border-danger p-3">
                      <Col>
                        <CustomCard countryName="ENGLAND" image={england} />
                      </Col>
                      <Col>
                        <p className="versus mt-5 text-danger text-center fw-bold">
                          VS
                        </p>
                      </Col>
                      <Col>
                        <CustomCard countryName="BRAZEL" image={brazel} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>

            {/* *********australia v/s India*********** */}
            <Carousel.Item interval={1000}>
              <Container>
                <Row>
                  <Col xs={12} sm={12} md={12}>
                    <Row className="square border border-danger p-3">
                      <Col>
                        <CustomCard countryName="AUTRALIA" image={australia} />
                      </Col>
                      <Col>
                        <p className="versus mt-5 text-danger text-center fw-bold">
                          VS
                        </p>
                      </Col>
                      <Col>
                        <CustomCard countryName="INDIA" image={india} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </>
  );
}
export default UpcomingMatches;
