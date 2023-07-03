import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/fietess.jpg";
import projImg2 from "../assets/img/ekart.jpg";
import projImg3 from "../assets/img/dashoard.png";
import projImg4 from "../assets/img/crud.png";
import projImg5 from "../assets/img/weather resuse.png";
import projImg6 from "../assets/img/keep.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";
//"Fitness Website"https://admin-dashboard-by-khan.netlify.app/E-Commerce-website
export const Projects = () => {
  const projects = [
    {
      title: (
        <a
          href="https://khan-fitnes-app.netlify.app/"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 style={{ fontWeight: "bold" }}>Fitness Website</h4>
        </a>
      ),
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: (
        <a
          href="https://e-commerce-app-by-khan.netlify.app/"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 style={{ fontWeight: "bold" }}>E-Commerce-website</h4>
        </a>
      ),

      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: (
        <a
          href="https://admin-dashboard-by-khan.netlify.app"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 style={{ fontWeight: "bold" }}>Admin Dashboard</h4>
        </a>
      ),
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: (
        <a
          href="https://github.com/mohd-khan09/CRUD-application"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 style={{ fontWeight: "bold" }}>CRUD-Application</h4>
        </a>
      ),
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: (
        <a
          href="https://weather-app-by.netlify.app/"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 style={{ fontWeight: "bold" }}>Weather-Application</h4>
        </a>
      ),
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: (
        <a
          href="https://keep-clone-by-khan.netlify.app/"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 style={{ fontWeight: "bold" }}>Google keep clone</h4>
        </a>
      ),
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                <div >
                  <h2>Projects</h2>
                  <p  >
                  I am a skilled web developer with a diverse portfolio of projects. I have successfully developed a fitness website, an e-commerce website, an admin dashboard, a CRUD application, a weather application, and a Google Keep clone. These projects showcase my proficiency in front-end and back-end technologies, including React, Node.js, Express, and MongoDB. I am experienced in designing user-friendly interfaces, integrating APIs, and delivering responsive web applications. Additionally, I have created a personal portfolio website to showcase my skills and projects. With a strong foundation in web development and a passion for creating innovative solutions, I am well-equipped to tackle a wide range of projects in the field of web development.
                  </p>
                  </div>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
