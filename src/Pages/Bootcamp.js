import {Link} from "react-router-dom"
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "../components/Navbar"

const Bootcamp = () => {
  return (
    <>
    <Navbar />
      <div
        style={{
          width: "1440px",
          height: "419px",
          backgroundColor: "#003145",
          color: "#fff",
        }}
        className="d-flex align-items-center"
      >
        <Container >
          <Form.Control
            className="fw-bolder w-50 bg-warning mb-4"
            type="email"
            value="Start's on 17th Jun'22 09:00 PM (India Standard Time)"
          />

          <div className="mb-4">
            <h1>Data Sprint 72 - Butterfly Identificaion</h1>
          </div>
          <div className="mb-4">
            <h4>Identify the classs which each butterfly belongs to</h4>
          </div>
          <Button variant="light" className="">
            Easy icon
          </Button>
        </Container>
      </div>
      <div className="mt-3">
        <div className="d-flex justify-content-between">
          <Container className="ms-5">
            <div className="d-flex ms-5">
              <h4 className="ms-5">Overvier</h4>
            </div>
          </Container>
          <div className="d-flex">
          <Link to="/challengedetails" className="me-3" >
            <Button variant="success" className="ms-3 w-100">
            Edit
            </Button>
            </Link>
            <Button variant="outline-danger" className="ms-3 w-50">
              Delete
            </Button>
          </div>
        </div>
        <hr />
        <div>
        <Container className="mt-5" >
        <div className="ms-2 ">
        <h5 className="text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            ullam ut eligendi magnam, voluptates adipisci assumenda accusamus
            itaque doloremque sequi quam molestiae, nemo natus! Perferendis
            praesentium atque sint neque consectetur!
          </h5>
        </div>
        <div className="ms-2 mt-4">
        <h5 className="text-secondary ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            ullam ut eligendi magnam, voluptates adipisci assumenda accusamus
            itaque doloremque sequi quam molestiae, nemo natus! Perferendis
            praesentium atque sint neque consectetur!
          </h5>
        </div>  <div className="ms-2 mt-4">
        <h5 className="text-secondary ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            ullam ut eligendi magnam, voluptates adipisci assumenda accusamus
            itaque doloremque sequi quam molestiae..
          </h5>
        </div>
       
        </Container>
        
        </div>
      </div>
    </>
  );
};

export default Bootcamp;
