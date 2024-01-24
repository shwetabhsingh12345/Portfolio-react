import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AssetIcon from "../../Assets/Projects/asset-icon.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AssetIcon}
              isBlog={false}
              title="Torrent2Direct"
              description="Conceptualized and developed Torrent2Direct web app for efficient torrent file management and direct downloads."
              ghLink="https://github.com/shwetabhsingh12345/torrent2direct"
              demoLink="https://torrent2direct.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AssetIcon}
              isBlog={false}
              title="WitPic"
              description="Developed WitPic, a humorous image-sharing web app inspired by Instagram, promoting creativity in comedic content."
              ghLink="https://github.com/shwetabhsingh12345/WitPic"
              demoLink="https://witpics.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AssetIcon}
              isBlog={false}
              title="Ghost-Stories WebApp"
              description="Led the design and implementation of a dynamic MERN stack web app, prioritizing scalability and modularity."
              ghLink="https://github.com/shwetabhsingh12345/ghost-stories"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AssetIcon}
              isBlog={false}
              title="Random-ID-Generator"
              description="Developed a React-based web app using Vite and Tailwind CSS for a Random ID Generator."
              ghLink="https://github.com/shwetabhsingh12345/random-id-generator"
              demoLink="https://statuesque-khapse-849401.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AssetIcon}
              isBlog={false}
              title="Weather-WebApp"
              description="Developed a Django-based Weather Web App with real-time information."
              ghLink="https://github.com/shwetabhsingh12345/weather-webapp-using-django"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AssetIcon}
              isBlog={false}
              title="Face Mask Recognition"
              description="Developed a Real-Time Face Mask Detector using Python, TensorFlow, Keras, and OpenCV. Demonstrates proficiency in Python, TensorFlow, and OpenCV, addressing pandemic safety through effective face mask compliance."
              ghLink="https://github.com/shwetabhsingh12345/Face-mask-recognition"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
