import React from 'react'
import logo from '../assets/log.svg'
import home from '../assets/Home.svg'
import movi from '../assets/mov.svg'
import tv from '../assets/tv.svg'
import calender from '../assets/Calendar.svg'
import grp from '../assets/grp.png'
import logout from '../assets/logout.png'
import logo2 from '../assets/log2.svg'
import more from '../assets/morem.svg'
import rename from '../assets/renam.svg'
import SideComp from './SideComp'

const SideBar = () => {
  return (
    <div className='p-4 border-r-[1px] rounded-r-3xl border-black w-fit md:block hidden'>
        <div className='flex flex-col justify-between items-start min-h-[100vh]'>
            <img 
            src={logo2} 
            alt=""
            className='' />
            <div className='flex flex-col gap-5'>
                <SideComp img={home} text="Home"/>
                <SideComp img={movi} text="Movies"/>
                <SideComp img={tv} text="TV Series"/>
                <SideComp img={calender} text="Upcoming"/>
            </div>
            <div>
                <img src={grp} alt="" />
            </div>
            <img src={logout} alt="" 
            className=''/>
        </div>
    </div>
  )
}

export default SideBar