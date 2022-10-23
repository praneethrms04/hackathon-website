import {Link} from "react-router-dom"
import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";

import plane from "../assets/icons/Plane.svg";

const Intro = () => {
  return (
    <div
      style={{
        width: "1440px",
        height: "561px",
        background: "#003145",
      }}
    >
      <Container className="text-white">
        <Row>
        
          <Col className="mt-5">
            <div className="mt-5 display-1">
              <h1 className="display-5 fw-bolder">
                Accelerate Innovation with Global AI Challenges{" "}
              </h1>
            </div>
            <div className="mt-5">
              <p className="h6">
                AI challenges at Sphi simulate real-world problems. It is a
                great place to put Your AI/Data Science skills to test on
                diverse datasets allowing you to foster learning through
                competitions.
              </p>
            </div>
            <Link to="/challengedetails" >
            <div className="mt-5">
              <Button className="bg-light text-dark btn-outline-light">
                <p className="h5">Create Challenge</p>
              </Button>
            </div>
            </Link>
           
          </Col>
          <Col className="d-flex flex-row-reverse mt-5">
            <div className="mt-4">
              <img src={plane} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
