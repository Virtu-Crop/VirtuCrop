import { useState } from 'react'
import './App.scss'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import About from './Pages/About/About'
import Info from './Pages/Info/Info'
import Contact from './Pages/Contact/Contact'
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app w-screen h-screen'>
      <Router>
        <Navigation/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/Info' element={<Info/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          </Routes> 
          <Footer/>
      </Router>
      
    </div>
  )
}

export default App
