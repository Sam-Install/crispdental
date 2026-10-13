import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Services from './pages/Services'
import OurTeam from './pages/OurTeam'
import Blog from './pages/Blog'
import Footer from './component/Footer'
import Contact from './pages/Contact'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Insurance from './pages/Insurance'

const App = () => {
  return (
    <div>

      <Navbar/>

      <Routes>

<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='/services' element={<Services/>} />
<Route path='/Team' element={<OurTeam/>} />
<Route path='/blog' element={<Blog/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/privacy-policy' element={<Privacy/>} />
<Route path='/terms' element={<Terms/>} />
<Route path='/insurance' element={<Insurance/>} />


      </Routes>

      <Footer/>

      
    </div>
  )
}

export default App