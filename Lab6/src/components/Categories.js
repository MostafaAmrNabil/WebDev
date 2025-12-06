import React from "react";
import "./Category.css"; 
import { FaUserFriends, FaArrowRight } from "react-icons/fa";

function Categories({ categories }) {
    return (
        <section className="category-section">
            <div className="category-text">
                <h2>Learn essential career and life skills</h2>
                <p>
                    Udemy helps you build in-demand skills fast and advance your career
                    in a changing job market.
                </p>
            </div>

            <div className="category-cards">
                {categories.map((cat, index) => (
                    <a
                        key={index}
                        href={cat.link || "#"}
                        className="topic-card"
                        style={{ backgroundImage: `url(${cat.image})` }}
                    >
                        <div className="topic-card-info">
                            {/* Enrollment tag */}
                            <div className="tag">
                                <FaUserFriends size={16} />
                                <div>{cat.enrollments}</div>
                            </div>

                            {/* Title and arrow */}
                            <div className="topic-card-title-container">
                                <h4>{cat.title}</h4>
                                <div className="topic-card-arrow">
                                    <FaArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Categories;
