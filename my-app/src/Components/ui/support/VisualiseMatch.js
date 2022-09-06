import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import england from "../../../utils/england.png";
import brazel from "../../../utils/brazel.jpg";
import australia from "../../../utils/australia.jpg";
import india from "../../../utils/india.jpg";

import "../../../Style/VisualiseMatch.css";

function VisualiseMatch() {
  const [timer, setTimer] = useState("00:00:00");
  const Ref = useRef(null);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:00:10");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  };
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <>
      <h1 className="text-danger mt-5 text-center">
        <u>Visualise Match</u>
      </h1>
      <Container>
        <ListGroup variant="flush">
          <ListGroup.Item className="square border border-danger p-1">
            <Row>
              <Col md={6}>
                <Row>
                  <Col md={2}>
                    <img
                      src={england}
                      alt="england.jpg"
                      width={90}
                      height={90}
                      className="image"
                    />
                  </Col>
                  <Col md={6}>
                    <h3 className="mt-4">England</h3>
                  </Col>
                </Row>
              </Col>

              {/* versus */}
              <Col md={6}>
                <Row>
                  <Col md={2}>
                    <img
                      src={brazel}
                      alt="brazel.jpg"
                      width={90}
                      height={90}
                      className="image"
                    />
                  </Col>
                  <Col md={6}>
                    <h3 className="mt-4">Brazel</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
            <h3 className="score">0-1</h3>
            <h2>{timer}</h2>
          </ListGroup.Item>

          {/* 2nd list */}
          <ListGroup.Item className="square border border-danger p-1">
            <Row>
              <Col md={6}>
                <Row>
                  <Col md={2}>
                    <img
                      src={australia}
                      alt="australia.jpg"
                      width={90}
                      height={90}
                      className="image"
                    />
                  </Col>
                  <Col md={6}>
                    <h3 className="mt-4">Australia</h3>
                  </Col>
                </Row>
              </Col>

              {/* versus */}
              <Col md={6}>
                <Row>
                  <Col md={2}>
                    <img
                      src={india}
                      alt="india.jpg"
                      width={90}
                      height={90}
                      className="image"
                    />
                  </Col>
                  <Col md={6}>
                    <h3 className="mt-4">India</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
            <h3 className="score">5-2</h3>
            <h2>{timer}</h2>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
}
export default VisualiseMatch;
