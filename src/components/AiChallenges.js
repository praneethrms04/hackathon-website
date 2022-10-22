import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import Icon4 from "../assets/icons/Chal4.svg"
import Icon1 from "../assets/icons/Icon1.svg"
import Vector from "../assets/icons/Vector.svg"
import Robot from "../assets/icons/Robot.svg"

const AiChallenges = () => {
  const ChallengesData = [
    {
      icon: Icon4,
      title: "Prove Your Skills",
      descrition:
        "Gain substantial experience by solving real-world problrms and pit against others to come up with innovative solutions",
    },
    {
      icon: Vector,
      title: "Learn from community",
      descrition:
        "One can look and analyze the solutions submitted by the other Data Scientists int tha community and learn from them",
    },
    {
      icon: Robot,
      title: "Challenge yourself",
      descrition:
        "There is nothing for you to lose by participating in a challenge. You can fail safe,learn out of the entire experience and bounce back harder.",
    },
    {
      icon: Icon1,
      title: "Earn recognition",
      descrition:
        "You will stand out from the crowd if you do well in AI challenfes, it only helps you shine in the community but also earns rewards",
    },
  ];
  return (
    <>
      <div
        style={{
          width: "1439px",
          height: "902px",
          backgroundColor: " #FFFFFF",
        }}
      >
        <Container className="d-flex justify-content-center">
          <div className="d-flex mt-5">
            <div className="h1 fw-bold">Why Participate in </div>
            <div className="h1 fw-bolder text-success ms-2"> Ai Challenges ?</div>
          </div>
        </Container>
        <Container className="d-flex">
          <Row xs={2}>
            {ChallengesData.map((data, index) => (
              <Col className="p-2" key={index}>
                <Card
                  className="mt-5"
                  style={{
                    width: "542px",
                    height: "276px",
                    background: "#F8F9FD",
                  }}
                >
                  <div className="ms-4">
                    <div className="mt-5"><img src={data.icon} alt="" /></div>
                    <div className="mt-4 fw-bold">
                      <h2 className="fw-bold">{data.title}</h2>
                    </div>
                    <div className="mt-4 mb-4">
                      <p className="h5 text-secondary">
                     {data.descrition}
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AiChallenges;
