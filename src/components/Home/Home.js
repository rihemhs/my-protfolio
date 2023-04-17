import React , { useState, useEffect }from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/developer_.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/Rihem Hassouna.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { GoCloudDownload } from "react-icons/go";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Home() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Rihem Hassouna.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Rihem Hassouna.pdf';
            alink.click();
        })
    })
}

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Rihem Hassouna</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left",color:"#6ccacc" }}>
                <Type />
              </div>
              
            </Col>
           

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          
          </Row>
        </Container>       
      </Container>  
      <div>
              
                <button 
                 target="_blank"
                onClick={onButtonClick}>
                    Download PDF
                </button>
            </div>
      <div
   style={{background:"rgb(237, 249, 254)",display:"flex",justifyContent:"left",paddingLeft:"200px",marginTop:"-150px"}}
      >
      <Button
            variant="primary"
            className="btn"
            
            href={pdf}
            style={{background:"rgb(237, 249, 254)"}}
            target="_blank">
            <GoCloudDownload />
            &nbsp;See My resume
          </Button>
        </div> 
         
       
      <Home2 />
     
    </section>
  );
}

export default Home;
