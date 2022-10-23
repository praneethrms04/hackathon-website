import {Link} from 'react-router-dom'
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

import {FaCheckCircle} from "react-icons/fa"

function ReactCards() {
  const ReactCardData = [
    {
      title: "DataScience Bootcamp-Graded Gratethon",
      img: CardImg4,
      button: "upcoming",
      status: "Starts In",
      time: "00 : 15 :22 ",
      timingName: "days hours mins",
      style : {
        backgroundColor : "#F2C946"
      }
    },
    {
      title: "DataSpint 72 Butterfly-identification",
      img: CardImg2,
      button: "upcoming",
      status: "Starts In",
      time: "00 : 12 :34 ",
      timingName: "days hours mins",
      style : {
        backgroundColor : "#F2C946"
      }
    },
    {
      title: "DataSpint 71 Wheather-Recognition",
      img: CardImg3,
      button: "Active",
      status: "Ends In",
      time: "01 : 17 :10 ",
      timingName: "days hours mins",
      style : {
        backgroundColor : "#BCE29E"
      }
    },
    {
      title: "DataSpint 70 Airline Passenger",
      img: CardImg5,
      button: "Active",
      status: "Ends In",
      time: "00 : 17 :27 ",
      timingName: "days hours mins",
      style : {
        backgroundColor : "#BCE29E"
      }
    },
    {
      title: "Engeneering Graduattes Employment Outcomes",
      img: CardImg6,
      button: "past",
      status: "Ended On",
      time: "16th May'22 09:00 PM ",
      style : {
        backgroundColor : "#FF97C1"
      }
    },
    {
      title: "Travel Insurance Claim Prediction  Outcomes",
      img: CardImg1,
      button: "past",
      status: "Ended On",
      time: "16th May'22 09:00 PM",
      style : {
        backgroundColor : "#FF97C1"
      }
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
      <Row xs={3}>
        {ReactCardData.map((data, index) => (
          <Col className="p-2" key={index}>
            <Card
              className="mt-5 ms-5 me-5"
              style={{ width: "350px", height: "500px" }}
            >
              <img src={data.img} alt="cardimg" />
              <div className="text-center mt-3">
                <Button
                  variant="secondary"
                  size="sm"
                  disabled
                  className="text-dark rounded"
                  style= {data.style}
                >
                 {data.button}
                </Button>
              </div>
              <Card.Body className="text-center">
                <Card.Title>{data.title}</Card.Title>
                <Card.Text className="h5 mt-4">{data.status}</Card.Text>
                <div className="mt-4">
                  <div className="row">
                    <div className="col h3">{data.time}</div>
                  </div>
                  <div className="row">
                    <div className="col fw-bolder">{data.timingName}</div>
                  </div>
                </div>
                <Link to="/bootcamp">
                <div className="mt-4">
                  <Button variant="success">
                  <FaCheckCircle className="h6 mt-1" /> Participate Now
                  </Button>
                </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ReactCards;
