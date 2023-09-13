import React from 'react'
import logo from '../assets/log.svg'
import search from '../assets/search.svg'
import menu from '../assets/Menu.png'

const NavBar = () => {
  return (
    <div>
        <div className='flex items-center justify-between'>
            <img src={logo} alt="" />
            <div className='flex relative w-[525px] h-[36px] items-center'>
            <input 
            type="text" 
            className=' p-2 bg-transparent text-white font-normal border-white border-[2px] outline-none rounded-md flex shrink w-[525px] h-[36px]' 
            placeholder='What do you want to watch?'/>
            <img 
            className='absolute right-[5%]'
            src={search} 
            alt="search" 
            />
            </div>
            <img 
            src={menu} 
            alt="menu" 
            />
        </div>
    </div>
  )
}

export default NavBar