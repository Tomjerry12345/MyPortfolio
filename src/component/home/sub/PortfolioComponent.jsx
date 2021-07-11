import React from "react";
import { Row, Col } from "react-bootstrap";
import { ButtonComponent } from "../../widget/ButtonComponent";

const PortfolioComponent = () => {
  return (
    <Col md={8}>
      <Row>
        <Col md={11} className="text-center">
          <h1 className="title" style={{ fontSize: "5em" }}>
            My Portfolio
          </h1>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col xs={4} sm={4}>
          <ButtonComponent id="#android" title="Android Project" />
        </Col>
        <Col xs={4} sm={4}>
          <ButtonComponent id="#web" title="Web Project" />
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col xs={4} md={4}>
          <ButtonComponent id="#game" title="Game Project" />
        </Col>
        <Col xs={4} md={4}>
          <ButtonComponent id="#uiux" title="UI/UX Project" />
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <ButtonComponent id="#sertifikat" title="My Sertifikat" />
      </Row>
    </Col>
  );
};

export default PortfolioComponent;
