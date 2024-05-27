import React, { useState } from "react"
import { useAuth } from "../hook/useAuth"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { signUpUser } from "../store/userSlice"
import { Action, ThunkDispatch } from "@reduxjs/toolkit"

const SignUp =()=>{

    const [value,setValue]=useState(  {
        username: "",
        email: "",
        password: "",
        course_group: 7
      })
  
    const {signin}=useAuth()
    const location =useLocation()
    const fromPage=location.state.from.pathname||'/'
    // Достаем из обьекта о текущей локации значение которые мы передали в стейт
    // из страницы с которой пришли либо же отправляем его на главную страницу
    // смотри src/HOC/Auth.tsx

    const navigate=useNavigate()
    const dispatch=useDispatch<ThunkDispatch<unknown, unknown, Action>>()

    const handler =(event:React.ChangeEvent<HTMLFormElement>)=>{
        event?.preventDefault()
        dispatch(signUpUser(value))
        // для того чтобы форма не отправлялаcь
        signin(value,()=>navigate('/confirmation',{state:{fromPage},replace:true}))
        // Передаем значение с инпута в качестве авторизации и в качестве callback
        // перенаправляем юзера обратно по урлу с которого он пришел
        // смотри src/HOC/Auth.tsx
        // Передавая обьект {replace:true} мы не даем юзера перейти обратно в логин
        // по истории "то есть удаляем из истории что он посещал логин страницу"
        // {
        //     "username": "string",
        //     "email": "user@example.com",
        //     "password": "string",
        //     "course_group": 0
        //   }
    }
    const inputHandler =(event:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=event.target;
        setValue((prev)=>({
            ...prev,
            [name]:value
        }
        ))
    }
    console.log(value)
    return <h1>
        Sign up Page
        <form style={{display:'flex',flexDirection:'column', width:'500ox'}} onSubmit={handler}>
            <input type="text" name="username" value={value.username} placeholder="username" onChange={inputHandler}/>
            <input type='email' name="email" value={value.email} placeholder="email" onChange={inputHandler}/>
            <input type='password' name="password" value={value.password} placeholder="password" onChange={inputHandler}/>

            {/* <input value={input} name="SignUp" onChange={(event)=>setInput(event.target.value)}/> */}
            <button type='submit'>Submit</button>
            {/* Logout находится в навбар
            src/components/NavBar/NavBar.tsx */}
        </form>
    </h1>
}
export default SignUp