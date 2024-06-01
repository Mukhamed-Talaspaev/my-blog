import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createPost=createAsyncThunk('post/createPost',async (formData:FormData,{rejectWithValue})=>{
    try{
        const {access}= JSON.parse(localStorage.getItem('Login') as string)
        const response=await fetch('https://studapi.teachmeskills.by/blog/posts/',
        {
            method:"POST",
            headers:{
                'Authorization': 'Bearer ' + access 
            },
            body:formData
        })
        if(!response.ok){
            throw new Error("MY ERROR")
        }
        const data =await response.json()
        console.log(data)
    }
    catch(error){
        return rejectWithValue((error as Error).message)
    }
})
const postSlice=createSlice({
    name:'post',
    initialState:{
        status:'',
        error:null, 
    },
    reducers:{},
    extraReducers:builder=>{
        builder
        .addCase(createPost.pending,(state)=>{
            state.status='loading'
        })
        .addCase(createPost.fulfilled,(state)=>{
            state.status='send'
            state.error=null
        })
        .addCase(createPost.rejected,(state,action)=>{
            state.error=(action.payload)as null
            state.status="error"
        })
    }
})
export default postSlice.reducer