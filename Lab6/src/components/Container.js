import React from "react";
import "./Container.css";

function Container() {
    return (
        <section className="promo-section">
            <div className="promo-box">

                {/* LEFT SIDE */}
                <div className="promo-left">
                    <h3 className="promo-title">Reimagine your career in the AI era</h3>
                    <p className="promo-desc">
                        Future-proof your skills with Personal Plan. Get access to fresh,
                        expert-led content anytime.
                    </p>

                    <ul className="promo-features">
                        <li>
                            <div className="icon purple"></div>
                            <span><strong>Learn</strong> AI and more</span>
                        </li>

                        <li>
                            <div className="icon green"></div>
                            <span><strong>Prep</strong> for a certification</span>
                        </li>

                        <li>
                            <div className="icon orange"></div>
                            <span><strong>Practice</strong> with AI coaching</span>
                        </li>

                        <li>
                            <div className="icon teal"></div>
                            <span><strong>Advance</strong> your career</span>
                        </li>
                    </ul>

                    <div className="promo-cta">
                        <button className="cta-btn">Learn more</button>

                        <div className="price-text">
                            Starting at E£204.00/month
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="promo-right">
                    <img
                        src="images.webp"
                       
                        alt="AI career banner"
                    />
                </div>
            </div>
        </section>
    );
}

export default Container;
