import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shwetabh Singh </span>
            from <span className="purple"> India.</span>
            <br />
            I am currently employed in Tata Consultancy Services.
            <br />
            I hold a Bachelor's degree in Computer Science Engineering (B.TECH CSE), graduating from the University of Lucknow.
            <br />
            During my academic journey, I excelled in both High School and Intermediate, securing 66% and 87%, respectively, from S.J.S Public School.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing PC Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shwetabh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
