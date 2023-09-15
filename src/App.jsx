import { useState } from 'react'
import './App.css'
import axios from 'axios';
import SearchBar from './components/NavBar';

import { ContextProvider } from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/movie/:id' element={<MovieDetail />} />
        </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  )
}

export default App
