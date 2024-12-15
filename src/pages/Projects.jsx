import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import wcl from "../assets/projects/WCL.png";
import invoice from "../assets/projects/invoice.jpg";
import tm from "../assets/projects/task-management.png";
import agd from "../assets/projects/Age and Gender.jpg";
import investment from "../assets/projects/investment calculator.jpg";
import kyc from "../assets/projects/kyc.jpg";

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
              imgPath={kyc}
              isBlog={false}
              title="KYCInsight"
              description="KYCInsight is a comprehensive KYC (Know Your Customer) solution designed to simplify and secure identity verification processes. Built with a React frontend and a Node.js backend, it integrates advanced features like OTP-based authentication, liveness detection using a Flask microservice, and document upload capabilities for Aadhaar and PAN cards. User information is stored securely in a MongoDB database, with UUIDs ensuring unique identification. The project aims to streamline KYC workflows with an intuitive interface and reliable verification mechanisms, offering a robust prototype for identity management systems."
            />
          </Col>

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
              imgPath={agd}
              isBlog={false}
              title="Age and Gender Detection"
              description="Discover the fusion of Python and OpenCV in the Age and Gender Detection project. This innovative endeavor employs deep learning models to accurately identify faces, estimate ages, and classify genders in real-time. With its intuitive interface and precise analysis, it offers invaluable insights into demographic distributions swiftly and effectively. Witness the intersection of technology and human understanding in this groundbreaking application of computer vision."
              ghLink="https://github.com/iam-madhur/Age-and-Gender-Detection.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tm}
              isBlog={false}
              title="Task Management Application"
              description="The Task Management Application is a simple yet efficient tool for organizing and tracking tasks. Built with React for the frontend and Node.js with SQLite for the backend, it allows users to create, view, update, and delete tasks seamlessly. Tasks are displayed in an intuitive card layout, with options to expand details, toggle status, and filter by completion. Features like real-time form validation, subtle animations, and responsive design enhance usability, making it a practical and visually appealing solution for managing daily tasks."
              ghLink="https://github.com/iam-madhur/Task-Management-Application.git"
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
