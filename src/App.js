import './App.css';
import Navbar from './components/Navbar';
import Nails from './components/Nails';
import Slider from './components/slider';
import slides from './components/sliderProps';
import NailColumns from './components/NailColumns';
import TestimonialSlider from './components/testimonialSlider';
import Reviews from './components/reviews';
import Footer from './components/Footer';
import testimonials from './components/testimonials';


function App() {
    return (
        <div className="App">
            <Navbar />
            <Slider slides={slides} />
            <Nails />
            <NailColumns />
            <TestimonialSlider testimonials={testimonials}/>
            <Reviews />
            <Footer />
        </div>
    )
}

export default App;