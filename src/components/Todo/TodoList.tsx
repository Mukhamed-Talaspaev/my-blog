import {useSelector} from 'react-redux'

import {TodoItemTypes } from '../../types/types'
import {TodoItem } from './TodoItem'
const TodoList =()=>{
  const todos= useSelector(state=>(state as {todos:{todos:TodoItemTypes[]}}).todos.todos)
  return  <ul>
{
todos.map((todo:TodoItemTypes)=><TodoItem key={todo.id} {...todo}/>)
}
    </ul>
}
export default TodoList