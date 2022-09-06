import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomCard({ countryName, image }) {
  return (
    <>
      <Card border="success" style={{ width: "18rem" }}>
        <Card.Header>{countryName}</Card.Header>
        <Card.Body>
          <Card.Img src={image} alt="image.js" width={150} height={150} />
        </Card.Body>
      </Card>
    </>
  );
}
export default CustomCard;
