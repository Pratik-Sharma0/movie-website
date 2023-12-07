import React, { useContext } from 'react'
import UserContext from './context/context'

function Search() {
  const{query,setQuery,isError}=useContext(UserContext)
  return (
   <>
   <section className='search-section'> 
   <h2>Search your movie</h2>
   <form onSubmit={(e)=>e.preventDefault()}>
    <div>
      <input
      type='text'
      value={query} onChange={(e)=>setQuery(e.target.value)}
      />
    </div>

   </form>
   <div className='card-error'>
    <p>{isError.show && isError.msg }</p>

   </div>

   </section>
   </>
  )
}

export default Search