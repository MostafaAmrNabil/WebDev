import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Container from "./components/Container";   // <-- NEW
import Courses from "./components/Courses";
import TrustedCompanies from "./components/TrustedCompanies";

import { heroData, categories, courses, trustedCompanies } from "./data";

import "./styles.css";
import "./components/Container.css"; // <-- Make sure this is imported too

function App() {
    return (
        <div className="App">

            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <Hero data={heroData} />

            {/* Categories Section */}
            <Categories categories={categories} />

            {/* PERSONAL PLAN BANNER SECTION */}
            <Container />   {/* <-- Inserted here */}

            {/* Courses Section */}
            <Courses courses={courses} />

            {/* Trusted Companies Section */}
            <TrustedCompanies companies={trustedCompanies} />
        </div>
    );
}

export default App;
