import './App.css';
import Header from './components/Header';
import Nails from './components/Nails';
import Slider from './components/slider';
import slides from './components/sliderProps';
import NailColumns from './components/NailColumns';


function App() {
    return (
        <div className="App">
            <Header />
            <Slider slides={slides} />
            <Nails />
            <NailColumns />
        </div>
    )
}

export default App;
