import {createContext,useState,useEffect} from "react";

export const ApiContext=createContext();
//imdbID: "tt0372784"
const ContextProvider=({children})=>{
    const [data, setData] = useState({});
    const [title, setTitle] = useState("Batman");
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setIsLoading(true)
        fetch( `https://www.omdbapi.com/?apikey=8523cbb8&s=${title}&page=${page}` )
            .then(data =>  data.json())
              .then(res => setData(res))
        setIsLoading(false)
    }, [title, page])
    console.log(page)

    return(
        <ApiContext.Provider value={{data, setData,  title, setTitle, isLoading, setPage}}>
            {children}
        </ApiContext.Provider>
    )
}
export default ContextProvider;