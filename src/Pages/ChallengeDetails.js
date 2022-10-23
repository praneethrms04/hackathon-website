import {Link} from "react-router-dom"
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Navbar from "../components/Navbar";


const ChallengeDetails = () => {
  return (
    <>
    <Navbar />
      <div
        style={{
          width: "1440px",
          height: "107px",
          background: "#F8F9FD",
        }}
      >
        <Container className="d-flex">
          <h2 className="mt-4 fw-bolder">Challenge Details</h2>
        </Container>
      </div>
      <div className="mt-4">
        <Container className="">
          <Form.Group className="mt-2 w-50 ms-5">
            <Form.Label className="mt-3 fw-bold">Challeng name</Form.Label>
            <Form.Control
              className="mt-3"
              value="Data Sprint 72 - butterfly Identification"
            />
          </Form.Group>
          <Form.Group className="mt-2 w-50 ms-5">
            <Form.Label className="mt-3 fw-bold">Start Date</Form.Label>
            <Form.Control className="mt-3" value="17th Jun'22 09:00 PM" />
          </Form.Group>
          <Form.Group className="mt-2 w-50 ms-5">
            <Form.Label className="mt-3 fw-bold">End Date</Form.Label>
            <Form.Control className="mt-3" value="21st Jun'22 11:00 PM" />
          </Form.Group>
          <Form.Group className="mt-2 w-50 ms-5">
            <Form.Label className="mt-3 fw-bold">Description</Form.Label>
            <Form.Control
              className="mt-3"
              as="textarea"
              style={{ height: "200px", width: "800px" }}
              placeholder="Identify the class to which butterfly belongs to"
            />
          </Form.Group>
          <Form.Group className="mt-2 w-50 ms-5">
            <Form.Label className="mt-3 fw-bold">Image</Form.Label>
            <Form.Control className="mt-3" placeholder="upload Image">
            </Form.Control>
          </Form.Group>
          <Form.Group className="mt-2 w-50 ms-5">
            <Form.Label className="mt-3 fw-bold">Level Type</Form.Label>
          </Form.Group>
          <div className="ms-5 w-25 bg-dark rounded text-align-center justisy-content-center">
          <DropdownButton
            variant ="dark"
            title="Easy "
            className="text-dark "
          ></DropdownButton>
          </div>
          <Link to="/">
          <Button variant="success" className="text-center ms-5 mt-4">
            Save Changes
          </Button>
          </Link>
        </Container>
      </div>
    </>
  );
};

export default ChallengeDetails;
