import React from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'


function App() {
  
  

  return (
    <div className='flex flex-col items-center w-screen h-screen'>
      <Header />
      <Outlet  />
    </div>
  )
}

export default App
