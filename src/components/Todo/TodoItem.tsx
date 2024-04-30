import { useDispatch } from "react-redux"
import { TodoItemTypes} from "../../types/types"
import { removeTodo, toggleTodo } from "../../store/todosSlice"

const TodoItem =({id,text,checked}:TodoItemTypes)=>{
    const dispatch =useDispatch()
    return (
    <li >
        <input type='checkbox' checked={checked} onChange={()=>dispatch(toggleTodo({id}))}/>
        <h1>{id}</h1>
        <h3>{text}</h3>
        <button onClick={()=>dispatch(removeTodo({id}))}>Delete</button>
    </li>)
}
export  {TodoItem}