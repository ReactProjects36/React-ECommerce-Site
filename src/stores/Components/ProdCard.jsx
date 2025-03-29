// Bootstrap Cards
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

//style
import "../styles/prodCard.css";

export default function ProdCard({ category, title }) {
  const navigate = useNavigate();

  const [productsList, setProductsList] = useState([]); // Original list of products
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered list of products
  const [brands, setBrands] = useState([]); // List of unique brands
  const [selectedBrands, setSelectedBrands] = useState([]); // List of selected brands

  const url = `https://dummyjson.com/products/category/${category}`;

  const getProducts = async () => {
    const { data } = await axios.get(url);
    const { products } = data;
    setProductsList(products);
    setFilteredProducts(products); // Initially, show all products

    const brands = [...new Set(products.map((product) => product.brand))];
    setBrands(brands);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Function to handle brand selection
  // function filterProducts(e) {
  //   const brand = e.target.name; // Get the brand name from the checkbox
  //   const isChecked = e.target.checked;

  //   let updatedSelectedBrands = [...selectedBrands];

  //   if (isChecked) {
  //     // Add the brand to the selected list
  //     updatedSelectedBrands.push(brand);
  //   } else {
  //     // Remove the brand from the selected list
  //     updatedSelectedBrands = updatedSelectedBrands.filter((b) => b !== brand);
  //   }

  //   setSelectedBrands(updatedSelectedBrands);

  //   // Filter products based on selected brands
  //   if (updatedSelectedBrands.length === 0) {
  //     // If no brand is selected, show all products
  //     setFilteredProducts(productsList);
  //   } else {
  //     // Filter products that match the selected brands
  //     const filtered = productsList.filter((product) => updatedSelectedBrands.includes(product.brand));
  //     setFilteredProducts(filtered);
  //   }
  // }

  const finalProducts = (e) => {
    console.log(e);
    const checkedBrand = e.target.name;
    const isChecked = e.target.checked;

    console.log(checkedBrand, isChecked);

    let runningBrands = [...selectedBrands];

    if (isChecked) {
      runningBrands.push(checkedBrand);
    } else {
      runningBrands = runningBrands.filter((brand) => brand != checkedBrand);
    }
    setSelectedBrands(runningBrands);

    if (runningBrands.length == 0) {
      setFilteredProducts(productsList);
    } else {
      const filteredProducts = productsList.filter((product) => runningBrands.includes(product.brand));
      setFilteredProducts(filteredProducts);
    }
  };

  return (
    <>
      {/* Brand Filters */}
      <div className="d-flex" style={{ background: "#90caf9" }}>
        {brands.map((brand, index) => {
          return (
            <div className="px-3" key={index}>
              <input type="checkbox" name={brand} id={brand} className="mx-2" onChange={(e) => finalProducts(e)} />
              <label htmlFor={brand}>{brand}</label>
            </div>
          );
        })}
      </div>

      {/* Title */}
      <h1 className="text-center mt-3">{title}</h1>

      {/* Products List */}
      <Container className="p-2">
        <Row>
          {filteredProducts.map((product) => {
            return (
              <Col md={4} sm={6} xs={12} key={product.id} className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }} className="m-3">
                  <Card.Img variant="top" src={product.thumbnail} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Button onClick={() => navigate(`/${product.category}/${product.id}`)} variant="primary">
                      Know More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
