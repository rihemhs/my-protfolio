import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/glocal.PNG";
import telice from "../../Assets/Projects/telice.PNG";
import soforthandelsregister from "../../Assets/Projects/handless.PNG";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import sddmprojet from "../../Assets/Projects/sddmprojet.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Event Birdhay"
              description="Simple componentized localstorage implementation for Facebook's React."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sddmprojet}
              isBlog={false}
              title="SDDM is Ecommerce website"
              description="SDDM is Ecommerce website c'est un site Ecommerce distiné aux dentistes et techniciennes permet acheter des horthéses aux dents et de formations payment avec stripe"
              demoLink="http://numerique.sddm.ch/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soforthandelsregister}
              isBlog={false}
              title="sofort-handelsregister.com"
              description="c'est un site E-commerce permet d'acheter les informations des differents sociétes"
              demoLink="https://sofort-handelsregister.com"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Site de Sociéte"
              description="C'est un site de société GLOGAL-IT-SOLUTION  "
              demoLink="https://glocal-it-solutions.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Site E_commerce"
              description="Site E_commerce (Vente des matreils et des vetements de sport"
              ghLink="ste de E commerce pas encore"
      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={telice}
              isBlog={false}
              title="Application mobile des Hotels "
              description="Développer application IOS mobile (Telice) : c’est une 
              application des hôtels qui permet de scanner et donnez votre 
              avis honnête sur les choses qui vous entourent et partagez 
              des idées innovantes et aussi peut communiquer(chat) avec 
              les hôtels."
              ghLink="http://www.telice.de/"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
