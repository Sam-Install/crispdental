import React from 'react'
import Hero1 from '../component/Hero1'
import Trust from '../component/Trust'
import Steps from '../component/Steps'
import Faqs from '../component/Faqs'
import FourServices from '../component/FourServices'
import SmallTeam from '../component/SmallTeam'
import Reviews from '../component/Reviews'

const Home = () => {
  return (
    <div>
        <Hero1/>
        <FourServices/>
        <Trust/>
        <SmallTeam/>
        <Steps/>
        <Reviews/>
        <Faqs/>
    </div>
  )
}

export default Home