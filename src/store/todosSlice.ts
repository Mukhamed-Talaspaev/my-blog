import {createSlice} from '@reduxjs/toolkit'
import { TodoItemTypes } from '../types/types'

const todosSlice =createSlice({
    name:'todos',
    initialState:{
        todos:[]
    },
    reducers:{
        addTodo(state:{todos:TodoItemTypes[]},action:{payload:{input:string}}){
            state.todos.push({
                id:new Date().toISOString(),
                checked:false,
                text:action.payload.input
            })
        },
        removeTodo(state:{todos:TodoItemTypes[]},action:{payload:{id:string}}){
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload.id)
        },
        toggleTodo(state:{todos:TodoItemTypes[]},action){
            const toggledTodo= state.todos.find((todo)=>todo.id===action.payload.id) as TodoItemTypes
            toggledTodo.checked=!toggledTodo.checked
        }

    }
})


export const {addTodo,removeTodo,toggleTodo}=todosSlice.actions

export default todosSlice.reducer