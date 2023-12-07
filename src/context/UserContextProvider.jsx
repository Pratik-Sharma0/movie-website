import { useEffect, useState } from "react";
import UserContext from "./context";
export const API_URL = `http://www.omdbapi.com/?apikey=60f9400d`;


const UserContextProvider = ({ children }) => {
   const [isLoading,setIsLoading]=useState(true);
   const [movie,setMovie]=useState([]);
   const[isError,setIsError]=useState({show:'false',msg:''})
   const[query,setQuery]=useState("titanic")
  const getMovie = async (url) => {
  setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      if(data.Response === 'True'){
         setIsLoading(false);
         setMovie(data.Search)
         setIsError({
          show:false,
          msg:''
       })
      }
      else{
         setIsError({
            show:true,
            msg:data.Error
         })

      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   let timer = setTimeout(()=>{
    getMovie(`${API_URL}&s=${query}`);
   },500)

   return()=> clearTimeout(timer)
  }, [query]);

  return <UserContext.Provider value={{isLoading,movie,isError,query,setQuery}}>{children}</UserContext.Provider>;
};
export default UserContextProvider;
