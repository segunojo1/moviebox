import React, { useEffect } from 'react'
import right from '../assets/right.png'
import { useGlobalContext } from '../context'
import moviedb from '../apis/moviedb';
import imdb from '../assets/jj.svg';
import tomato from '../assets/tomato.svg';
import fav from "../assets/Favorite.svg";
import { useNavigate } from 'react-router-dom';

const Movies = () => {
    
    const {setLoading, movies, setMovies, getData, setFavourites, favourites} = useGlobalContext();
    useEffect(() => {
        setLoading(prev => !prev);
        const fetchData = async () => {
            try {
                const resp = await moviedb.get("/movie/top_rated");
                console.log(resp);
                if (resp.status == 200)
                {
                    let mov = resp.data.results.splice(0, 10)
                    setMovies(mov);
                }
            } catch (error) {
                
            }
        }
        fetchData();
    }, []
    )
    const navigate = useNavigate();
    const showMovie = (id) => {
        console.log("done");
        navigate(`/movie/${id}`);
    }
    const addToFav = (e) => {
        setFavourites([...favourites, {
        }])
        e.target.classList.toggle("active");
    }
  return (
    <div className='p-[66px]'>
        <div className='flex justify-between '>
        <h1 className='text-4xl font-bold'>Featured Movie</h1>
        <div className='flex items-center gap-[10px] cursor-pointer'>
           <p className='text-[#BE123C] '>See more</p>
           <img src={right} alt="right" />
        </div>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-11 mt-6 mx-auto w-fit'>
           {movies.map(({release_date, backdrop_path, id, overview, poster_path, title}) => (
            <div data-testid = "movie-card" className='grid md:w-[250px] w-[200px]' key={id} 
            onClick={() => {
                getData(id)
                showMovie(id)}}>
                <div className='relative'>
                    <img 
                    src={fav} 
                    alt="fav" 
                    className='absolute top-5 right-5'
                    onClick={(e) => addToFav(e)}/>
                <img 
                data-testid = "movie-poster"
                src={`https://image.tmdb.org/t/p/w500${poster_path}`} 
                width="250px"
                height="370px"
                alt="movie poster" />
                </div>
                <p 
                data-testid = "movie-release-date"
                className='font-bold text-[#9CA3AF]'>USA, {release_date}</p>
                <p 
                className='font-bold text-xl'
                data-testid= "movie-title">{title}</p>
                <div className='flex justify-between'>
                    <div className='flex'>
                    <img src={imdb} alt="" />
                    <p>86.0/100</p>
                    </div>
                    <div className='flex'>
                    <img src={tomato} alt="" />
                    <p>87%</p>
                    </div>
                </div>
                    <p className='font-bold  text-[#9CA3AF]'>Action</p>
            </div>
           ))}
        </div>
    </div>
  )
}

export default Movies