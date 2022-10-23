import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import Ai from "../assets/icons/Ai.svg";
import Contact from "../assets/icons/Contact.svg"
import Challenge from "../assets/icons/Challenge.svg"

const HomeIntro = () => {
  return (
    <div
      style={{
        width: "1440px",
        height: "200px",
        backgroundColor: " #002A3B",
      }}
    >
      <Container className="text-white">
        <Row>
        {/* col_1 */}
          <Col className="mt-5">
            <div className="d-flex mt-3">
              <div className="me-4">
                <img src={Ai} alt="Imgs" />
              </div>
              <div className="ms-2">
                <p className="h2">100k+</p>
                <p className="h6">AI Model submissions</p>
              </div>
              <div
                className="ms-5 mt-3"
                style={{
                  borderLeft: "2px solid white",
                  height: "40px",
                }}
              ></div>
            </div>
          </Col>
          {/*col_2 */}
          <Col className="mt-5 ms-5">
            <div className="d-flex mt-3">
              <div className="me-4">
                {/* <img src={Icon2} alt="" /> */}
                {/* <img src={Icon3} alt="" /> */}
                <img src={Contact} alt="Imgs" />
              </div>
              <div className="ms-2">
                <p className="h2">50k+</p>
                <p className="h6">Data Scientists</p>
              </div>
              <div
                className="ms-5 mt-3"
                style={{
                  borderLeft: "2px solid white",
                  height: "40px",
                }}
              ></div>
            </div>
          
          </Col>
          {/* col_3 */}
          <Col className="mt-5">
            <div className="d-flex mt-3">
              <div className="me-4">
                {/* <img src={Icon2} alt="" /> */}
                {/* <img src={Icon3} alt="" /> */}
                <img src={Challenge} alt="Imgs" />
              </div>
              <div className="ms-2">
                <p className="h2">100+ +</p>
                <p className="h6">AI Challenges Posted</p>
              </div>
            </div>
          </Col>
          {/* cols end */}
        </Row>
      </Container>
    </div>
  );
};

export default HomeIntro;
