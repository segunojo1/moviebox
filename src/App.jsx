import { useState } from 'react'
import './App.css'
import axios from 'axios';
import SearchBar from './components/NavBar';
import Hero from './components/Hero';
import Movies from './components/Movies';

function App() {
  
    const fetchData = () => {
      try {
        const res = axios.get('https://api.themoviedb.org/3/movie/top_rated');
        console.log(res);
      } catch (error) {
        
      }
    }
fetchData();
  return (
    <div>
      <Hero />
      <Movies /> 
    </div>
  )
}

export default App
