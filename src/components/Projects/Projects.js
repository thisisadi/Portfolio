import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              imgPath={"https://cdn.dribbble.com/userupload/8609326/file/original-0ce9af14e2167732674579374589f224.jpg?resize=752x"}
              isBlog={false}
              title="Secure Storage System"
              description="Developed encryptoDrive, an Android App focused on secure user authentication, file storage, and sharing;
enabled seamless encryption and decryption of files without compromising file size integrity. Integrated visually impactful pie charts into the application’s user interface, providing users with an intuitive way to analyze and manage storage details resulting in a 40% increase in data organization efficiency"
              ghLink="https://github.com/thisisadi/SecureStorageSystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://play-lh.googleusercontent.com/LEfUrtoGxlEH6t0JiiFqcl2w31Q2FbMjIt4yEmb9YVar6DV8JTLbXNgEKonwHwUwIBEo=w480-h960-rw"}
              isBlog={false}
              title="Pic-It-Up"
              description="Pioneered the development and launch of Pic-It-Up, an Android application that offered a rich array of
features, including 100+ stylish effects, blur photo, filters, grids, change frame, and beauty plus tools,
delivering a seamless and enjoyable photo editing experience
Key Features: 50+ filters, free hand cropping, stickers, pixelate, change orientation, share on different platforms"
              ghLink="https://github.com/thisisadi/Pic-It-Up"
              demoLink="https://play.google.com/store/apps/details?id=com.picitup.photoeditor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://thisisprags.netlify.app/assets/images/group-6.png"}
              isBlog={false}
              title="Voterzmate"
              description="Implemented VoterZmate, an innovative Android application that simplified the polling experience by
utilizing online services, ensuring a smooth and efficient online voting process
∗ Integrated biometric fingerprint scanning as a secure 2-step authentication method, resulting in a 60% decrease in account breaches and strengthening overall data protection"
              ghLink="https://github.com/thisisadi/VoterZmate"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
