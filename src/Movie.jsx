import React, { useContext } from 'react'
import UserContext from './context/context'
import { NavLink } from 'react-router-dom'


function Movie() {
    const {movie} = useContext(UserContext)
  return (
  <>
  <section className='movie-page'>
    <div className='container grid grid-4-col'> {
    movie.map((currMovie)=>{
      const{Title,imdbID,Poster}=currMovie;
      return(
        <NavLink to={`movie/${imdbID}`} key={imdbID}>
          <div className='card'>
            <div className='card-info'>
              <h2>{Title}</h2>
              <img src={Poster} alt={imdbID}  />
            </div>
          </div>
        </NavLink>
      )
    })
  }</div>
  </section>


  </>
  )
}

export default Movie