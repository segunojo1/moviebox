import React from 'react'
import SideBar from '../components/SideBar'
import MainMovieDetail from '../components/MainMovieDetail'

const MovieDetail = () => {
  return (
    <div className='flex '>
        <SideBar />
        <MainMovieDetail />
    </div>
  )
}

export default MovieDetail