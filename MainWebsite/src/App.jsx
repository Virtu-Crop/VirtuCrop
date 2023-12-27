import './App.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Products from './Pages/Products/Products';


function App() {

  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products/>} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />

    </>
  )
}

export default App
