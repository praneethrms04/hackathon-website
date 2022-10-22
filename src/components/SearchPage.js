import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { DropdownButton, Dropdown } from "react-bootstrap";

import {AiFillCloseCircle} from "react-icons/ai"

const SearchPage = () => {
  return (
    <div
      style={{
        width: "1440px",
        height: "324px",
        backgroundColor: "#002A3B",
      }}
      className="d-flex justify-content-center text-center "
    >
      <Container fluid>
        <Form className="mt-5">
          <div className="text-white">
            <h2>Explore Challenges</h2>
          </div>
          <div className="text-center d-flex justify-content-center mt-5 ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="w-50"
              aria-label="Search"
            />
            <div className="d-flex justify-content-between ms-5 ">
              <DropdownButton
                id="dropdown-button-dark-example2"
                variant="light"
                menuVariant="light"
                title="filters"
                className=""
              >
                <Dropdown.Item href="#/action-2">
                  <p className="disable bg-secondary rounded text-center">
                    Status
                  </p>
                  <Dropdown.Divider />
                  <Form.Check aria-label="option 1" label="All" />
                  <Form.Check aria-label="option 2" label="Active" />
                  <Form.Check aria-label="option 3" label="Upcoming" />
                  <Form.Check aria-label="option 4" label="Past" />
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2">
                  <p className="disable bg-secondary rounded text-center">
                    Level
                  </p>
                  <Dropdown.Divider />
                  <Form.Check aria-label="option 1" label="Easy" />
                  <Form.Check aria-label="option 2" label="Medium" />
                  <Form.Check aria-label="option 3" label="Hard" />
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div className="w-50 justify-content-center mt-5 ms-5">
          <div className="ms-5 ">
            <Button variant="secondary" className="ms-5">
              Upcoming <AiFillCloseCircle/>
            </Button>
            <Button variant="secondary" className="ms-4">
              Post<AiFillCloseCircle/>
            </Button>
            <Button variant="secondary" className="ms-4 ">
              Easy <AiFillCloseCircle/>
            </Button>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default SearchPage;
