import { useState } from "react"
import TodoList from "../components/Todo/TodoList"
import {useDispatch} from 'react-redux'
import { addTodo } from "../store/todosSlice"

const Home =()=>{

    const [input,setInput]=useState('')
    const dispatch=useDispatch()
    const handler=()=>{
        dispatch(addTodo({input}))
        setInput('')
    }
    return <div>
        <input value={input} onChange={(event)=>setInput(event.target.value)}/>
        <button onClick={handler}>add Todo</button>
       <TodoList/>
    </div>
}
export default Home