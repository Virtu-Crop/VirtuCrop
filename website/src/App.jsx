// import './App.scss';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import Home from './Pages/Home/Home';
// import Contact from './Pages/Contact/Contact';
// import Services from './Pages/Services/Services';
// import Info from './Pages/Info/Info';
// import About from './Pages/About/About';
// import Navigation from './Components/Navigation/Navigation';

// function App() {


//   return (
//     <>
//       <Router>
//         {/* <Navigation/> */}
//         <Routes>
//           <Route to='/' element={<Home/>}/>
//           <Route to='/about' element={<About/>}/>
//           <Route to='/info' element={<Info/>}/>
//           <Route to='/services' element={<Services/>}/>
//           <Route to='/contact' element={<Contact/>}/>
//         </Routes>
//       </Router>
//     </>
//   )
// }

// export default App
import { useState } from 'react'
import './App.scss'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import About from './Pages/About/About'
import Info from './Pages/Info/Info'
import Contact from './Pages/Contact/Contact'
import Navigation from './Components/Navigation/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navigation/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/Info' element={<Info/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          </Routes>
      </Router>
      
    </>
  )
}

export default App
