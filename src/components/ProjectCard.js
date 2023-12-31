import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <h4 className="text-cener">{title}</h4>
      <div className="proj-imgbx">
        <img src={imgUrl} />
      </div>
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </Col>
  );
};
