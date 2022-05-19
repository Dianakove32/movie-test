import {createContext, useState, useEffect} from "react";

export const ApiContext=createContext();

const ContextProvider = ({children}) => {
    const [data, setData] = useState({});
    const [title, setTitle] = useState("Batman");
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [user, setUser] = useState()

    useEffect(() => {
        setIsLoading(true);
        setData({});
        fetch( `https://www.omdbapi.com/?apikey=8523cbb8&s=${title}&page=${page}` )
          .then((res) => res.ok && res.json()
        ).then( data => setData(data)
        ).finally(() =>
          setIsLoading(false)
        )

    }, [title, page])
     console.log(data)
    return(
        <ApiContext.Provider value={{data, setData,  title, setTitle, isLoading, setPage, page, setUser, user}}>
            {children}
        </ApiContext.Provider>
    )
}
export default ContextProvider;