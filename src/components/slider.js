import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import './slider-style.css'

function Slider({ slides }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        console.log('selected index: ', selectedIndex)
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index}
            onSelect={handleSelect}
            nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}
            prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon changed" />}
        >
            {slides.map((slideProps) => (
                <Carousel.Item key={slideProps.image}>
                    <img
                        className="slideSize d-block w-70"
                        src={slideProps.image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{slideProps.title}</h3>
                        <p>{slideProps.subTitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Slider;