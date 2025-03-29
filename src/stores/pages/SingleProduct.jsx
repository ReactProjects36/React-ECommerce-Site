import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { parentCartData } from "../../App";

//Css
import "../styles/singleProducts.css";

// Bootstrap
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SingleProduct() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cartProducts, setCartProducts } = useContext(parentCartData);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <h2 className="text-center my-5">Loading...</h2>;
  }

  if (!product) {
    return <h2 className="text-center my-5">Product not found</h2>;
  }

  const addtoCart = (product) => {
    console.log("Adding to cart:", product); // Debugging log
    setCartProducts([...cartProducts, product]);
    toast.success("Successfully added to cart!");
  };

  return (
    <Container className="my-5">
      <Row>
        {/* Product Images Carousel */}
        <Col md={6}>
          <Carousel>
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  style={{ objectFit: "cover" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        {/* Product Details */}
        <Col md={6}>
          <Card className="p-3">
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>
                <strong>Price:</strong> ${product.price}
              </Card.Text>
              <Card.Text>
                <strong>Category:</strong> {product.category}
              </Card.Text>
              <Card.Text>
                <strong>Brand:</strong> {product.brand}
              </Card.Text>
              <Card.Text>
                <strong>Stock:</strong> {product.stock} available
              </Card.Text>
              <Card.Text>
                <strong>Rating:</strong> {product.rating} / 5
              </Card.Text>
              <Button variant="primary" onClick={() => window.history.back()}>
                Go Back
              </Button>
              <Button variant="info" onClick={() => addtoCart(product)} className="mx-3">
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Additional Information */}
      <Row className="mt-5">
        <Col>
          <h4>Additional Information</h4>
          <p>
            <strong>Warranty:</strong> {product.warrantyInformation}
          </p>
          <p>
            <strong>Shipping:</strong> {product.shippingInformation}
          </p>
          <p>
            <strong>Return Policy:</strong> {product.returnPolicy}
          </p>
        </Col>
      </Row>

      {/* Reviews Section */}
      <Row className="mt-5">
        <Col>
          <h4>Customer Reviews</h4>
          {product.reviews.map((review, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Text>
                  <strong>{review.reviewerName}</strong> ({review.rating} / 5)
                </Card.Text>
                <Card.Text>{review.comment}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
