import React from "react";
import "./Hero.css";

function Hero({ data }) {
    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/batman.jpg"})`
            }}
        >
            <div className="hero-content">
                <h1>{data.title}</h1>
                <p>{data.subtitle}</p>
                <button>{data.buttonText}</button>
            </div>
        </section>
    );
}

export default Hero;
