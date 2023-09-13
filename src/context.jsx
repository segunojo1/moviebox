import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const ContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    return <AppContext.Provider value={{setLoading, movies, setMovies}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, ContextProvider}