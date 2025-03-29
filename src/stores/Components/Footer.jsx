import React from "react";
import { NavLink } from "react-router";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Styles
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer  py-4" >
      <Container>
        <Row>
          <Col md={4} sm={12} className="text-center text-md-start mb-3 mb-md-0">
            <h5>About Us</h5>
            <p>
              We are an e-commerce platform offering a wide range of products to meet your needs. Shop with us for the
              best deals!
            </p>
          </Col>
          <Col md={4} sm={12} className="text-center mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="footer-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/beauty" className="footer-link">
                  Beauty
                </NavLink>
              </li>
              <li>
                <NavLink to="/laptops" className="footer-link">
                  Laptops
                </NavLink>
              </li>
              <li>
                <NavLink to="/mens-shirts" className="footer-link">
                  Men's Shirts
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md={4} sm={12} className="text-center text-md-end">
            <h5>Contact Us</h5>
            <p>Email: support@ecom.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Ecom Street, Shop City</p>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Teks. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
