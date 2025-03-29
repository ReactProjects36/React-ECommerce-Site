import { Outlet } from "react-router";
import "../styles/landingpage.css";

export default function LandingPage({ props }) {
  return (
    <>
      <div className="landing-page-container">
        <h1 className="landing-page-title">
          <span>Welcome</span> <span>to</span> <span>Store</span> <span>Select</span> <span>Category</span>{" "}
          <span>to</span> <span>Start</span>
        </h1>
      </div>
    </>
  );
}
