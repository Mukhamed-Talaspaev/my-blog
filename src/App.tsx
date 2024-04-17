import { useState } from 'react'
import './App.css'
import Layout from './Layout'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [isActive,setIsactive]=useState(false)
  return (
   <>
   <Header isActive={isActive} setIsactive={()=>setIsactive(!isActive)}/>
  <NavBar isActive={isActive} />
  <Layout/>
  </>
  )
}

export default App
