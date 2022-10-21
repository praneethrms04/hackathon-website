import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import CardImg1 from "../assets/cardimage/CardImg1.png";
import CardImg2 from "../assets/cardimage/CardImg2.png";
import CardImg3 from "../assets/cardimage/CardImg3.png";
import CardImg4 from "../assets/cardimage/CardImg4.png";
import CardImg5 from "../assets/cardimage/CardImg5.png";
import CardImg6 from "../assets/cardimage/CardImg6.png";

function GridExample() {
  const ReactCardData = [
    {
      title: "DataScience Bootcamp-Graded Gratethon",
      img: CardImg4,
      status: "Starts In",
      time: "00 : 15 :22 ",
      timingName: "days hours mins",
    },
    {
      title: "DataSpint 72 Butterfly-identification",
      img: CardImg2,
      status: "Starts In",
      time: "00 : 12 :34 ",
      timingName: "days hours mins",
    },
    {
      title: "DataSpint 71 Wheather-Recognition",
      img:  CardImg3 ,
      status: "Ends In",
      time: "01 : 17 :10 ",
      timingName: "days hours mins",
    },
    {
      title: "DataSpint 70 Airline Passenger-Satisfaction",
      img:  CardImg5 ,
      status: "Ends In",
      time: "00 : 17 :27 ",
      timingName: "days hours mins",
    },
    {
      title: "Engeneering Graduattes Employment Outcpmes",
      img: CardImg6,
      status: "Ended On",
      time: "16th May'22 09:00 PM ",
    },
    {
      title: "Travel Insurance Claim Prediction",
      img:  CardImg1 ,
      status: "Ended On",
      time: "16th May'22 09:00 PM",
    },
  ];

  return (
    <div
      style={{
        width: "1440px",
        height: "1196px",
        backgroundColor: " #003145",
      }}
    >
      <Row xs={3} className="">
        {ReactCardData.map((data, index) => (
          <Col className="p-2" key={index}>
            <Card className="mt-5 ms-5 me-5" style={{ width: "320px",height:"500px" }}>
              <img src={data.img} alt="cardimg" />
              <div className="text-center mt-3">
                <Button
                  variant="secondary"
                  size="sm"
                  disabled
                  className="text-dark rounded"
                >
                  Upcoming
                </Button>
              </div>

              <Card.Body className="text-center">
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.status}</Card.Text>
                <div className="mt-4">
                  <div className="row h2 fw-bold">
                    <div className="col">{data.time}</div>
                  </div>
                  <div className="row">
                    <div className="col fw-bolder">{data.timingName}</div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="success">Participate Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default GridExample;
