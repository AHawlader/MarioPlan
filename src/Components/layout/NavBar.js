import React from "react";
import { Link } from "react-router-dom";
import SinedInLink from "./SignedInLink";
import SinedOutLink from "./SignedOutLink";

const Navbar = () => {
  return (
    <nav className="nav-wrapper deep-purple lighten-2">
      <div className="container">
        <Link to="/" className="brand-logo left">
          Plan
        </Link>
        <SinedInLink />
        <SinedOutLink />
      </div>
    </nav>
  );
};
export default Navbar;
