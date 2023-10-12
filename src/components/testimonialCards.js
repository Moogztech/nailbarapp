const TestimonialCard = ({ author, text }) => {
    return (
        <div className="testimonial-card">
            <div className="card-content">
                <p className="testimonial-text">{text}</p>
                <p className="testimonial-author">{author}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;