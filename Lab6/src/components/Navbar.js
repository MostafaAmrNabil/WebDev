import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { exploreMenu } from "../data";
import "./Navbar.css";

function Navbar() {
    const [exploreOpen, setExploreOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Left section: Logo + Explore */}
            <div className="navbar-left">
                <a href="/" className="desktop-header_logo">
                    <img
                        src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg"
                        alt="Udemy"
                        width="91"
                        height="34"
                        loading="lazy"
                    />
                </a>

                {/* Explore dropdown */}
                <div
                    className="nav-explore"
                    onMouseEnter={() => setExploreOpen(true)}
                    onMouseLeave={() => setExploreOpen(false)}
                >
                    Explore
                    {exploreOpen && (
                        <ul className="explore-dropdown">
                            {exploreMenu.map((item) => (
                                <li key={item.id}>{item.title}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Center section: Search bar */}
            <div className="search-bar">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Search for anything" />
            </div>

            {/* Right section: Extra links + Login/Signup */}
            <div className="nav-actions">
                <button className="nav-btn">Plans & Pricing</button>
                <button className="nav-btn">Udemy Business</button>
                <button className="nav-btn">Tech on Udemy</button>
                <button className="nav-icon">
                    <FaShoppingCart />
                </button>
                <button className="login">Log in</button>
                <button className="signup">Sign up</button>
            </div>
        </nav>
    );
}

export default Navbar;
