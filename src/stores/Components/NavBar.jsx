import teks_logo from "../../assets/teks_logo.png";
import { NavLink, useNavigate } from "react-router";
import { useContext } from "react";

import { parentCartData } from "../../App";

// Bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";

// Style
import "../styles/navbar.css";

function NavBar() {
  const { cartProducts, setCartProducts } = useContext(parentCartData);
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="nav-bar">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={teks_logo}
            width="150"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link as={NavLink} to="/beauty">
              Beauty
            </Nav.Link>
            <Nav.Link as={NavLink} to="/fragrances">
              Fragrances
            </Nav.Link>
            <Nav.Link as={NavLink} to="/laptops">
              Laptops
            </Nav.Link>
            <Nav.Link as={NavLink} to="/mens-shirts">
              Mens Shirts
            </Nav.Link>
          </Nav>
          <Button variant="primary" onClick={() => navigate("/cart")}>
            Cart <Badge bg="info">{cartProducts.length}</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
