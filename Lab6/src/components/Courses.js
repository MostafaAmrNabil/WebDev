import React, { useState } from "react";
import { courseCategories } from "../data";
import "./Courses.css";

const Courses = () => {
    const [activeCategory, setActiveCategory] = useState(courseCategories[0].id);

    return (
        <section className="courses-wrapper">
            {/* Header */}
            <div className="courses-header">
                <h2 className="courses-heading">
                    Skills to transform your career and life
                </h2>
                <div className="courses-subtitle">
                    From critical skills to technical topics, Udemy supports your professional development.
                </div>
            </div>

            {/* Category tabs */}
            <div className="courses-tabs" role="tablist">
                {courseCategories.map((category) => (
                    <button
                        key={category.id}
                        role="tab"
                        className={`courses-tab ${activeCategory === category.id ? "active" : ""}`}
                        onClick={() => setActiveCategory(category.id)}
                        aria-selected={activeCategory === category.id}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Courses slider */}
            <div className="courses-slider">
                {courseCategories
                    .find((cat) => cat.id === activeCategory)
                    .courses.map((course) => (
                        <div key={course.id} className="course-card">
                            <img src={course.image} alt={course.title} />
                            {course.badge && <div className="course-badge">{course.badge}</div>}
                            <h3 className="course-title">{course.title}</h3>
                            <p className="course-author">by {course.author}</p>
                            <div className="course-rating">
                                {course.rating} ★ ({course.reviews} reviews)
                            </div>
                            <div className="course-details">
                                {course.hours} • {course.lectures} lectures
                            </div>
                            <div className="course-price">
                                <span className="current-price">{course.price}</span>
                                <span className="original-price">{course.originalPrice}</span>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Courses;
