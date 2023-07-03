import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
              I possess a diverse range of skills that make me a valuable asset in the field of web development. With strong communication, leadership, and team management abilities, I excel in coordinating and driving successful projects.
              <br />
              My technical expertise covers both front-end and back-end technologies, including React, Node.js, Express, and MongoDB
                <br />
                I have a proven track record of designing and developing user-friendly, responsive web applications. 
                <br />
                With a solid foundation in web development and a passion for innovation, I am eager to contribute my skills to innovative projects and make a meaningful impact in the industry.
              
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt=" Image" />
                  <h5>Web Developer</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt=" Image" />
                  <h5>Front End Developer</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt=" Image" />
                  <h5>Back End Developer</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt=" Image" />
                  <h5> Developer</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Gradient" />
    </section>
  );
};
