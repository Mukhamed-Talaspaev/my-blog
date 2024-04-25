import { Outlet } from "react-router-dom"
import { ActiveContext } from "./Context/context"
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import { useState } from "react"

const Layout =()=>{
  const [isActive,setIsactive]=useState(false)
  return (
    <ActiveContext.Provider value={{isActive:isActive,setIsactive:setIsactive}}>
    <Header/>
      <NavBar />
      <Outlet/>
      <footer>It's Footer</footer>
  </ActiveContext.Provider>
  ) 
   
    
}
export default Layout