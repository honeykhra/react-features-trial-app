import { useState } from "react";
import "./Navbar.css";

const NavBar = () => {
  const [burger, setBurger] = useState(false);
  // console.log(burger);
  return (
    <nav className="container">
      <h1 className="logo">
        Best<span>Buddy</span>
      </h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Profile</li>
      </ul>

      <div
        className={burger ? "hamburger active" : "hamburger"}
        onClick={() => setBurger(!burger)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;
