import { useState } from 'react'

import './App.css'
import Home from './Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import SingleMovie from './SingleMovie'
import NoPageFound from './NoPageFound'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='movie/:id' element={<SingleMovie/>} />
      <Route path='*' element={<NoPageFound/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
