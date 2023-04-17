import React from "react";
import Card from "react-bootstrap/Card";
import { MdChecklist} from "react-icons/md";

import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify",color:"rgb(163, 177, 199)" }}>
            Hi Everyone, I am <span className="purple">Rihem Hassouna</span>
            from <span className="purple"> Monastir, Tunisia.</span>
            <br />I am a junior developer Front-end.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <MdChecklist /> Playing Games
            </li>
            <li className="about-activity">
            <MdChecklist /> Writting Tech Blogs
            </li>
            <li className="about-activity">
            <MdChecklist /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rihem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
