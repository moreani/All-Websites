import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import WasteTypes from './pages/WasteTypes';
import Reduction from './pages/Reduction';
import Recycling from './pages/Recycling';
import Government from './pages/Government';
import GetInvolved from './pages/GetInvolved';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-50 text-slate-800">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/waste-types" element={<WasteTypes />} />
            <Route path="/reduce" element={<Reduction />} />
            <Route path="/recycle" element={<Recycling />} />
            <Route path="/initiatives" element={<Government />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;