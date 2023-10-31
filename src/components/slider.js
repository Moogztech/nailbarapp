import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import './slider-style.css'
import { Container } from 'reactstrap';

function Slider({ slides }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        console.log('selected index: ', selectedIndex)
        setIndex(selectedIndex);
    };

    return (
        <Container>
            <Carousel activeIndex={index}
                onSelect={handleSelect}
                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}
                prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon changed" />}
            >
                {slides.map((slideProps) => (
                    <Carousel.Item key={slideProps.image}>
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
                                <h1>NAILS DONE RIGHT</h1>
                                <p>"Every detail considered, reimagined + improved."</p>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

export default Slider;