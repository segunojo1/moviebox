import React from 'react'
import NavBar from './NavBar'
import poster from '../assets/Poster.svg'
import HeroDetails from './HeroDetails'

const Hero = () => {
  return (
    <div>
        <div className="bg-[url('/src/assets/Poster.svg')] hero px-[66px]">
            <NavBar />
            <HeroDetails />

        </div>
    </div>
  )
}

export default Hero