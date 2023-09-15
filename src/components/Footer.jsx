import React from 'react'
import facebook from '../assets/fa-brands_facebook-square.svg'
import instagram from '../assets/fa-brands_instagram.svg'
import twitter from '../assets/fa-brands_twitter.svg'
import youtube from '../assets/fa-brands_youtube.svg'

const Footer = () => {
  return (
    <div className='grid gap-7'>
        <div className='flex items-center justify-center gap-5'>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
        </div>
        <div className='flex gap-10 justify-center'>
            <p className='font-bold'>Conditions of use</p>
            <p className='font-bold'>Privacy & Policy</p>
            <p className='font-bold'>Press Room</p>
        </div>
        <p className='text-[#6B7280] font-bold text-center'>© 2023 MovieBox by Segun Ojo</p>
    </div>
  )
}

export default Footer