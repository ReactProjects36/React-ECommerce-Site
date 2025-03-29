import { useContext } from "react";
import { parentCartData } from "../../App";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CartPage() {
  const { cartProducts, setCartProducts } = useContext(parentCartData);

  // Calculate the total price
  const totalPrice = cartProducts.reduce((total, product) => total + product.price, 0);

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cartProducts.filter((product) => product.id !== productId);
    setCartProducts(updatedCart);
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Your Cart</h1>
      {cartProducts.length === 0 ? (
        <h3 className="text-center">Your cart is empty!</h3>
      ) : (
        <>
          <Row>
            {cartProducts.map((product) => (
              <Col xs={12} key={product.id} className="mb-3">
                <Card className="p-3">
                  <Row className="align-items-center">
                    {/* Product Image */}
                    <Col md={3} sm={4} xs={12}>
                      <Card.Img
                        src={product.thumbnail}
                        alt={product.title}
                        style={{ maxHeight: "150px", objectFit: "cover" }}
                      />
                    </Col>

                    {/* Product Details */}
                    <Col md={6} sm={5} xs={12}>
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                          <strong>Price:</strong> ${product.price}
                        </Card.Text>
                      </Card.Body>
                    </Col>

                    {/* Actions */}
                    <Col md={3} sm={3} xs={12} className="text-md-end text-center">
                      <Button variant="danger" onClick={() => removeFromCart(product.id)} className="mb-2">
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <Button> CheckOut </Button>
          </div>
        </>
      )}
    </Container>
  );
}
