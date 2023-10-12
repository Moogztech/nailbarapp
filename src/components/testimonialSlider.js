import React, { useState } from "react";
import TestimonialCard from "./testimonialCards";
import "./testimonial.css";

const TestimonialSlider = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    return (
        <div className="testimonial-slider">
            <button onClick={prevSlide} className="slider-button">
                &lt; Previous
            </button>
            <div className="testimonial-cards">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={testimonial.id}
                        name={testimonial.author}
                        text={testimonial.text}
                    />
                ))}
            </div>
            <button onClick={nextSlide} className="slider-button">
                Next &gt;
            </button>
        </div>
    );
};

export default TestimonialSlider;
