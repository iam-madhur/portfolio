import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import wcl from "../assets/projects/WCL.png";
import invoice from "../assets/projects/invoice.jpg";
import ttt from "../assets/projects/tic tac toe.jpg";
import agd from "../assets/projects/Age and Gender.jpg";
import investment from "../assets/projects/investment calculator.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wcl}
              isBlog={false}
              title="WCL Website"
              description="The Warriors Champions League (WCL) website is a dynamic platform designed for esports enthusiasts. Leveraging the power of the MERN Stack and REST API, along with Bootstrap and Sass for sleek styling, this project showcases my expertise in full-stack web development. From tournament updates to player profiles, the website offers a comprehensive hub for gamers to engage with the esports community. Explore the seamless integration of technology and design, reflecting the passion and dedication of the WCL organization in elevating the esports experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoice}
              isBlog={false}
              title="Invoice Generator"
              description="The Invoice Generator App is a sleek and efficient tool crafted with React.js and Bootstrap. With dynamic form generation, itemized list management, multi-currency support, automated tax calculation, and PDF generation, this app simplifies the invoicing process. Its modular architecture ensures scalability, while a responsive design optimizes usability and performance. Experience seamless invoicing with this intuitive solution."
              ghLink="https://github.com/iam-madhur/Invoice-Generator.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ttt}
              isBlog={false}
              title="Tic Tac Toe Game"
              description="Delve into a world of strategic entertainment with the React.js Tic Tac Toe Game. This modern twist on the timeless classic offers an immersive experience for players of all ages. Challenge your friends to intense battles or enjoy solo play in a sleek and intuitive interface. With its seamless design and captivating gameplay, this rendition of Tic Tac Toe promises endless hours of fun and excitement."
              ghLink="https://github.com/iam-madhur/Tic-Tac-Toe-game-using-React.js.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agd}
              isBlog={false}
              title="Age and Gender Detection"
              description="Discover the fusion of Python and OpenCV in the Age and Gender Detection project. This innovative endeavor employs deep learning models to accurately identify faces, estimate ages, and classify genders in real-time. With its intuitive interface and precise analysis, it offers invaluable insights into demographic distributions swiftly and effectively. Witness the intersection of technology and human understanding in this groundbreaking application of computer vision."
              ghLink="https://github.com/iam-madhur/Age-and-Gender-Detection.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={investment}
              isBlog={false}
              title="Investment Calculator"
              description="Experience the power of financial planning with the Investment Calculator, built using React.js. This intuitive tool empowers users to calculate interest on investments based on various parameters such as investment period and interest rate. With its sleek design and user-friendly interface, users can input their investment details and instantly receive accurate projections of their returns."
              ghLink="https://github.com/iam-madhur/Investment-Calculator.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
