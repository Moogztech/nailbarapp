import Carousel from 'react-bootstrap/Carousel';
import {CarouselItem} from 'reactstrap';
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
                    <CarouselItem key={slideProps}>
                        <div className='d-inline-flex slideContainer'>
                            <div>
                                <div>
                                    <img
                                        className="slideSize"
                                        src={slideProps.image}
                                        alt="Slide"
                                    />
                                </div>
                            </div>
                            <div className='textAdjust'>
                                <h1 className='titleSize'>{slideProps.title}</h1>
                                <p className='descriptionSize'>{slideProps.description}</p>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </Carousel>
    );
}

export default Slider;