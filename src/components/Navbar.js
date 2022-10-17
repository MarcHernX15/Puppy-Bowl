import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav id="theNavBar">
            <Link id="links" to="settings">Settings   </Link>
            <Link id="links" to="about">About Me  </Link>
            <Link id="links" to="puppies">All Puppies  </Link>

        </nav>
    )

};

export default Navbar;

