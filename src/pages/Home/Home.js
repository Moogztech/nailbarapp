import Nails from '../../components/Home/Nails';
import Slider from '../../components/Home/slider';
import slides from '../../components/Home/sliderProps';
import NailColumns from '../../components/Home/NailColumns';
import Reviews from '../../components/Home/reviews';

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