import axios from "axios";
import { useEffect, useState } from "react";

// Components
import ProdCard from "../Components/ProdCard";

export default function FragrancesPage({ props }) {
  const title = "Fragrances";

  return (
    <>
      <ProdCard category="Fragrances" title={title} />
    </>
  );
}
