import axios from "axios";
import { createContext, useContext, useState } from "react";
import moviedb from "./apis/moviedb";

const AppContext = createContext();

const ContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([]);

    const getData = async (id) => {
        console.log("done 2");
        const resp = await moviedb.get(`/movie/${id}`);
        setSelectedMovie(resp.data);
        console.log(resp.data);
    }

    return <AppContext.Provider value={{setLoading, movies, setMovies, getData, selectedMovie, setSelectedMovie}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, ContextProvider}