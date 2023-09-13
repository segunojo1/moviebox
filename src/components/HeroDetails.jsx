import React from 'react'
import imdb from '../assets/jj.svg'
import tomato from '../assets/tomato.svg'
import play from '../assets/play.svg'

const HeroDetails = () => {
  return (
    <div className='w-[404px] mt-[2rem] gap-4 grid pb-32'>
        <h1 className='text-white font-bold text-5xl'>John Wick 3 : Parabellum</h1>
        <div className='flex'>
          <img src={imdb} alt=""/>
          <p className='text-white'>86.0 / 100</p>
          <img src={tomato} alt="" />
          <p className='text-white'>97%</p>
        </div> 

        <p className='text-white '>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
        <div className='bg-[#BE123C] text-white p-4 flex items-center w-fit gap-2'> 
           <img src={play} alt="play" />
           <p>WATCH TRAILER</p>
        </div>
    </div>
  )
}

export default HeroDetails