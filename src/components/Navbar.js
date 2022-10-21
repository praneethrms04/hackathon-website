import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavbarLayout() {
  return (
    <>
      <Navbar className="contai bg-dark ">
        <Container>
          <Navbar.Brand className="d-flex justify-conten text-white">
            <div>Hello </div>
            <h3>Dphi</h3>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarLayout;
