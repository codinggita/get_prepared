import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"
// import SSLogo from "./path_to_your_logo"; // replace with the path to your logo

function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-container">
       
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/Home" className="nav-links">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/FindADonor" className="nav-links">Find A Donor</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/TypesOfBloodDonation" className="nav-links">Types Of Blood Donation</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/BloodDonationProcess" className="nav-links">Blood Donation Process</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/SelectPlaceToDonateBlood" className="nav-links">Select Place To Donate Blood</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
