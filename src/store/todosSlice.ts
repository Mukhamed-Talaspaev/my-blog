import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { TodoItemTypes } from '../types/types'
export const fetchTodos=createAsyncThunk('todos/fetchTodos', async (_,{rejectWithValue})=> {
    try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    

        if(!responce.ok){
            throw new Error('Error is here  ):')
        }
        const data = await responce.json()
        return data
    } catch (error) {
        return rejectWithValue((error as Error).message)
    }
 
})
export const addNewTodo=createAsyncThunk('todos/addNewTodo',async (text:string,{rejectWithValue,dispatch})=>{
    try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/todos',{
            method: 'POST',
            body: JSON.stringify({
                userId: 1,
                id: 1,
                title: text,
                completed: false
              },),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
       

        if(!responce.ok){
            throw new Error('Error is here  ):')
        }
        const data = await responce.json()
        
        dispatch(addTodo(data))
    } catch (error) {
        return rejectWithValue((error as Error).message)
    }
})
const todosSlice =createSlice({
    name:'todos',
    initialState:{
        todos:[],
        status:null as null|'loading'|'fulfilled'|'rejected',
        error:null as null |string
    },
    reducers:{
        addTodo(state:{todos:TodoItemTypes[]},action){
            state.todos.push(action.payload)
        },
        removeTodo(state:{todos:TodoItemTypes[]},action:{payload:{id:number}}){
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload.id)
        },
        toggleTodo(state:{todos:TodoItemTypes[]},action){
            const toggledTodo= state.todos.find((todo)=>todo.id===action.payload.id) as TodoItemTypes
            toggledTodo.completed=!toggledTodo.completed
        }

    },
    extraReducers: builder => {
        builder
          .addCase(fetchTodos.pending, (state) => {
            state.status = 'loading'
            state.error=null
          })
          .addCase(fetchTodos.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.error=null
            state.todos=action.payload
          })
          .addCase(fetchTodos.rejected,(state,action)=>{
            state.status='rejected'
            state.error =(action.payload as string)
          })
          .addCase(addNewTodo.rejected,(state)=>{
            state.todos.push()
          })
      }
})


export const {addTodo,removeTodo,toggleTodo}=todosSlice.actions

export default todosSlice.reducer