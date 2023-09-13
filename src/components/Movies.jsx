import React, { useEffect } from 'react'
import right from '../assets/right.png'
import { useGlobalContext } from '../context'
import moviedb from '../apis/moviedb';

const Movies = () => {

    const {setLoading, movies, setMovies} = useGlobalContext();
    useEffect(() => {
            setLoading(prev => !prev);
            const fetchData = async () => {
                try {
                    const resp = await moviedb.get("/movie/top_rated");
                    console.log(resp);
                    if (resp.status == 200)
                    {
                        setMovies(resp.data.results);
                    }
                } catch (error) {
                    
                }
            }
            fetchData();
        }, []
    )
  return (
    <div className='p-[66px]'>
        <div className='flex justify-between '>
        <h1 className='text-4xl font-bold'>Featured Movie</h1>
        <div className='flex items-center gap-[10px] cursor-pointer'>
           <p className='text-[#BE123C] '>See more</p>
           <img src={right} alt="right" />
        </div>
        </div>
        <div className='grid grid-cols-4'>
           {movies.map(({backdrop_path, original_title, overview, poster_path, title}) => (
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
                <p>{title}</p>
            </div>
           ))}
        </div>
    </div>
  )
}

export default Movies