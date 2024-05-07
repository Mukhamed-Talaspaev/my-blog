import { useDispatch } from "react-redux"
import { TodoItemTypes} from "../../types/types"
import { removeTodo, toggleTodo } from "../../store/todosSlice"

const TodoItem =({id,title,completed}:TodoItemTypes)=>{
    const dispatch =useDispatch()
    return (
    <li >
        <input type='checkbox' checked={completed} onChange={()=>dispatch(toggleTodo({id}))}/>
        <h1>{id}</h1>
        <h3>{title}</h3>
        <button onClick={()=>dispatch(removeTodo({id}))}>Delete</button>
    </li>)
}
export  {TodoItem}