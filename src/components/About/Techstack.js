import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiDatabase,
  DiMongodb,
  DiNodejs,
  DiReact,
  DiDocker,
  DiJavascript,
  DiPython,
  DiAws,
  DiGit,
} from "react-icons/di";

import {
  SiExpress,
  SiAxios,
  SiReactrouter,
  SiAmazonaws,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAxios />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReactrouter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws/>
      </Col>
    </Row>
  );
}

export default Techstack;
