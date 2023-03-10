import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home'

const App = () => {
  return <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </>
}

export default App