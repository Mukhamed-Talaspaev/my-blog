import React, { useState } from "react"
import { useAuth } from "../hook/useAuth"
import { useLocation, useNavigate } from "react-router-dom"

const Login =()=>{
    const [input,setInput]=useState('')
    const {signin}=useAuth()
    const location =useLocation()
    const fromPage=location.state.from.pathname||'/'
    // Достаем из обьекта о текущей локации значение которые мы передали в стейт
    // из страницы с которой пришли либо же отправляем его на главную страницу
    // смотри src/HOC/Auth.tsx

    const navigate=useNavigate()
    const handler =(event:React.ChangeEvent<HTMLFormElement>)=>{
        event?.preventDefault()
        // для того чтобы форма не отправлялаcь
        signin(event?.target.login.value,()=>navigate(fromPage,{replace:true}))
        // Передаем значение с инпута в качестве авторизации и в качестве callback
        // перенаправляем юзера обратно по урлу с которого он пришел
        // смотри src/HOC/Auth.tsx
        // Передавая обьект {replace:true} мы не даем юзера перейти обратно в логин
        // по истории "то есть удаляем из истории что он посещал логин страницу"
      
    }
    return <h1>
        Login Page
        <form onSubmit={handler}>
            <label>Login</label>
            <input value={input} name="login" onChange={(event)=>setInput(event.target.value)}/>
            <button type='submit'>Login</button>
            {/* Logout находится в навбар
            src/components/NavBar/NavBar.tsx */}
        </form>
    </h1>
}
export default Login