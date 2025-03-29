import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

// Components
import ProdCard from "../Components/ProdCard";

export default function LaptopsPage({ props }) {
  const title = "Laptops";
  return (
    <>
      <ProdCard category="laptops" title={title} />
      <Outlet />
    </>
  );
}
