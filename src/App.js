import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Staff from './pages/Staff';
import Booking from './pages/Booking';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/book" element={<Booking />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;