import React from 'react'
import right from '../assets/right.png'

const Movies = () => {
  return (
    <div className='flex justify-between p-[66px]'>
        <h1 className='text-4xl font-bold'>Featured Movie</h1>
        <div className='flex items-center gap-[10px] cursor-pointer'>
           <p className='text-[#BE123C] '>See more</p>
           <img src={right} alt="right" />
        </div>
    </div>
  )
}

export default Movies