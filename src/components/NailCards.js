import React from 'react';
import './nail-style.css';

const NailCards = (props) => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="heart" className="card-img-top" />
            </div>
            <div className="card-body text dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.paragraph}
                </p>
                <a href="#" className="btn btn-outline-secondary">Book </a>
            </div>
        </div>
    )
}

export default NailCards;