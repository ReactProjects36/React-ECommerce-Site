import axios from "axios";
import { useEffect, useState } from "react";

// Components
import ProdCard from "../Components/ProdCard";

export default function MensPage({ props }) {
  const title = "Men's Shirts";
  return (
    <>
      <ProdCard category="mens-shirts" title={title} />
    </>
  );
}
