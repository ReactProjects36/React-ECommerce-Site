import axios from "axios";
import { useEffect, useState } from "react";

// Components
import ProdCard from "../Components/ProdCard";

export default function BeautyPage({ props }) {
  const title = "Beauty Products";
  return (
    <>
      <ProdCard category="beauty" title={title} />
    </>
  );
}
