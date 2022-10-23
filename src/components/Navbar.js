import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/icons/logo.png"

function NavbarLayout() {
  return (
    <>
      <Navbar style={{
        position : "absolute",
        width : "1400px",
        height : "64px",
        background:"#fff"
      }}>
        <Container>
          <Navbar.Brand className="d-flex justify-conter">
          <img src={logo} alt="logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarLayout;
