import { useState } from 'react'
import './App.css'
import Layout from './Layout'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import { ActiveContext } from './Context/context'

function App() {
  const [isActive,setIsactive]=useState(false)
  return (
   <>
   <ActiveContext.Provider value={{isActive:isActive,setIsactive:setIsactive}}>
    <Header/>
     <NavBar />
     <Layout/>
  </ActiveContext.Provider>
  </>
  )
}

export default App
