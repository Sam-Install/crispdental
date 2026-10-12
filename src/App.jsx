import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Services from './pages/Services'
import OurTeam from './pages/OurTeam'
import Blog from './pages/Blog'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>

      <Navbar/>

      <Routes>

<Route path='/' element={<Home/>} />
<Route path='/services' element={<Services/>} />
<Route path='/Team' element={<OurTeam/>} />
<Route path='/blog' element={<Blog/>} />


      </Routes>

      <Footer/>

      
    </div>
  )
}

export default App