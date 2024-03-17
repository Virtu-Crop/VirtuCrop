import './App.scss'
import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Products from './Pages/Products/Products';
import CurvyTriangleLoader from './Components/loader/CurvyTriangleLoader';
import Privacy from './Components/Footer/Files/Privacy/Privacy';
import Terms from './Components/Footer/Files/Terms/Terms';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some async operation (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the time as needed
  }, []);

  return (
    <>
      {loading ? (
        <CurvyTriangleLoader />
      ) : (
        <>
          <Navigation />
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/products' element={<Products />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/privacy' element={<Privacy />} />
              <Route path='/terms' element={<Terms />} />
            </Routes>
          </Router>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
