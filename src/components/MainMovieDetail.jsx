import React, { useContext, useEffect } from 'react'
import foot from "../assets/foot.svg"
import star from "../assets/Star.svg"
import { ContextProvider, useGlobalContext } from '../context'

const MainMovieDetail = ({vid}) => {
    let isMounted;
    const {selectedMovie} = useGlobalContext();
    const gen = selectedMovie.genres;
    useEffect(() => {
        isMounted = false;
        isMounted = true;
    }, [selectedMovie])
  return (
    <div className='p-9 w-full'>
        <div className={`bg-[url('https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}')] poster`}
        style={{backgroundImage: `url('https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}')`, backgroundPosition: 'center', borderRadius: '50px'}}>

        </div>
        
        <div>
            <div className='flex'>
                {
                    selectedMovie != null ? (
                        <div className='flex justify-between items-center gap-6'>
            <p className='font-bold py-5' data-testid= "movie-title">{selectedMovie.title}</p>
            <p data-testid = "movie-release-date" > {selectedMovie.release_date} </p>
            <p>• PG-13 •</p>
            <p data-testid="movie-runtime">{selectedMovie.runtime}</p>
                <div className='flex items-center'>  
                    <img src={star} alt="star" />
                    <p>{selectedMovie.vote_average}</p>
                </div>
                        </div>
                    ) : (
                        <div>
                            <h1>SORRY WE COULDN'T FETCH MOVIE DETAILS</h1>
                        </div>
                    )
                }
            </div>
            <div>
                
            </div>
        </div>
        <div>
            <div className='grid gap-5'>
               <p data-testid= "movie-overview" >{selectedMovie.overview}</p>
                <p>Director: </p>
                <p className='text-[#BE123C]'>Budget: ${selectedMovie.budget}</p>
                <p className='text-[#BE123C]'>Revenue: ${selectedMovie.revenue}</p>
                <img src={foot} alt="" />
            </div>
            <div>

            </div>
        </div>

    </div>
  )
}

export default MainMovieDetail