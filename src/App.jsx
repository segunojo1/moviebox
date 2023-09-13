import { useState } from 'react'
import './App.css'
import axios from 'axios';
import SearchBar from './components/NavBar';
import Hero from './components/Hero';
import Movies from './components/Movies';

function App() {
  ;
  return (
    <div>
      <Hero />
      <Movies /> 
    </div>
  )
}

export default App
