import { createContext, useContext } from "react";

const AppContext = createContext();

const ContextProvider = ({children}) => {

    return <AppContext.Provider value={{}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, ContextProvider}