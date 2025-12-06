import React from "react";
import { trustedCompanies } from "../data"; // import from your data.js
import "./TrustedCompanies.css";

const TrustedCompanies = () => {
    return (
        <div className="partners-banner_content">
            <h2 className="partners-banner_heading">
                Trusted by over 17,000 companies and millions of learners around the world
            </h2>
            <ul className="partner-logos_list">
                {trustedCompanies.map((company) => (
                    <li key={company.id} className="partner-logos_item">
                        <img src={company.logo} alt={`${company.name} logo`} loading="eager" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrustedCompanies;
