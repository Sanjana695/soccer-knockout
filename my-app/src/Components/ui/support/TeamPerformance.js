import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import arizona from "../../../utils/arizona.png";
import "../../../Style/TeamPerformance.css";

// import json file
import records from "../../../records.json";
console.log(records);

function TeamPerformance() {
  return (
    <>
      <h1 className="text-danger mt-5 text-center">
        <u>TEAM Performance</u>
      </h1>
      <Container>
        <Table>
          <thead>
            <tr className="text-danger">
              <th>#</th>
              <th>Team Name</th>
              <th>Matches</th>
              <th>Win</th>
              <th>Loose</th>
              <th>NR</th>
              <th>Goals</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => {
              return (
                <tr key={record.id}>
                  <td>{record.id}</td>
                  <td>
                    <Row>
                      <Col md={2}>
                        <img
                          src={record.img}
                          alt=" Arizona Cardinals.jpg"
                          width={30}
                          height={30}
                        />
                      </Col>
                      <Col md={5}>{record.teamName}</Col>
                    </Row>
                  </td>
                  <td>{record.matches}</td>
                  <td>{record.win}</td>
                  <td>{record.loose}</td>
                  <td>{record.nr}</td>
                  <td>{record.goals}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
export default TeamPerformance;
