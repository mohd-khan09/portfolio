import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
export const Footer = () => {
  return (
    <footer>
      <Container  className="cont">
        <Row className="align-items-center">
          
          
            
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/mohammed-khan-627402203/" target="_blank" >
                  {" "}
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/mohd-khan09?tab=repositories" target="_blank"  >
                  
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://www.instagram.com/mohd_khan09" target="_blank"  >
                  {" "}
                  <img src={navIcon3} alt="" />
                </a>
          
              </div>
             
           
      
        </Row>
      </Container>
    </footer>
  );
};
