import React from 'react';
import './nail-style.css';

const NailCards = (props) => {
    return (
        <div className="nail-card text-center shadow">
            <div className="nail-overflow">
                <img src={props.imgsrc} alt="heart" className="nail-card-img-top" />
            </div>
            <div className="nail-card-body text dark">
                <h4 className="nail-card-title">{props.title}</h4>
                <p className="nail-card-text">
                    {props.paragraph}
                </p>
                <a href="/" className="btn btn-outline-secondary">Book </a>
            </div>
        </div>
    )
}

export default NailCards;