import { Routes, Route } from "react-router";
import { createContext, useState } from "react";
import "./App.css";

// Components
import NavBar from "./stores/Components/NavBar";
import Footer from "./stores/Components/Footer";

// Pages
import LandingPage from "./stores/pages/LandingPage";
import BeautyPage from "./stores/pages/BeautyPage";
import FragrancesPage from "./stores/pages/FragrancesPage";
import LaptopPage from "./stores/pages/Laptops";
import MensShirts from "./stores/pages/MensShirts";
import SingleProduct from "./stores/pages/SingleProduct";
import CartPage from "./stores/pages/CartPage";

export const parentCartData = createContext();

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  return (
    <>
      <parentCartData.Provider value={{ cartProducts, setCartProducts }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/beauty" element={<BeautyPage />} />
          <Route path="/fragrances" element={<FragrancesPage />} />
          <Route path="/laptops" element={<LaptopPage />} />
          <Route path="/mens-shirts" element={<MensShirts />} />
          <Route path="/:category/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </parentCartData.Provider>
    </>
  );
}

export default App;
