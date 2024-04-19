import { useEffect, useRef, useState } from "react"
import Button from "./ui-components/Button/Button"

const Layout =()=>{
  const [input, setInput]=useState('')
  const inputref=useRef<HTMLInputElement|null>(null)

  useEffect(()=>{


  })
  return(  
   
     <section >
      <Button disabled={false} bookmark handler={()=>console.log('flex') } >click</Button>
       <button onClick={()=>inputref.current!.focus()}>click</button>
      <input ref={inputref} value={input} onChange={(event)=>setInput(event.target.value)}/>

  
    </section>)
}
export default Layout