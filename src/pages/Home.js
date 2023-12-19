import Nails from '../components/Nails';
import Slider from '../components/slider';
import slides from '../components/sliderProps';
import NailColumns from '../components/NailColumns';
import Reviews from '../components/reviews';

const Home = () => {
    return (
        <div>
            <Slider slides={slides} />
            <Nails />
            <NailColumns />
            <Reviews />
        </div>
    );
};

export default Home;