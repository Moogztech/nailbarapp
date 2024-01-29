import './App.css';
import Header from './components/Home/Header';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Staff from './pages/Staff/Staff';
import Booking from './pages/Booking/Booking';
import Footer from './components/Home/Footer';
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