import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div>

                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>

                <Routes>
                    <Route path='/About' element={<About />} />
                </Routes>

                <Routes>
                    <Route path='/Services' element={<Services />} />
                </Routes>

                <Routes>
                    <Route path='/Contact' element={<Contact />} />
                </Routes>

                <Footer />

            </div>
        </BrowserRouter>
    );
}

export default App;