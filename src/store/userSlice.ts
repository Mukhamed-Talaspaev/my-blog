import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ActivateUser, User } from "../types/types";


export const signUpUser=createAsyncThunk('user/signUpUser',async (activateObj:User,{rejectWithValue,dispatch})=>{
    try {
        const responce = await fetch('https://studapi.teachmeskills.by/auth/users/',{
            method: 'POST',
            body: JSON.stringify(activateObj),
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": "2u9EiabuRdAvpzVVsb1AyBCN4NHiCd5Ea3MCV5Pzj5kaopDjEW0Dqhmb3jXgmn3p"
            },
          })
       

        if(!responce.ok){
            throw new Error('Error is here  ):')
        }
        const data = await responce.json()
        console.log(data)
       dispatch(addUser(data))
    } catch (error) {
        return rejectWithValue((error as Error).message)
    }
})
export const activateUser=createAsyncThunk('user/activateUser',async (activateObj:ActivateUser,{rejectWithValue})=>{
    try {
        const obj={
            "uid":  activateObj.uid,
            "token": activateObj.token
          }
        const responce = await fetch('https://studapi.teachmeskills.by/auth/users/activation/',{
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            },
          })
       
// console.log("activateObj",activateObj)
        if(!responce.ok){
            throw new Error('Error is here  ):')
        }
        const data = await responce.json()
        console.log(data)
    //    dispatch(addUser(data))
    } catch (error) {
        return rejectWithValue((error as Error).message)
    }
})
export const getUser =createAsyncThunk('user/sigIN',async (userLogin,{rejectWithValue})=>{
    try{
          const responce = await  fetch('https://studapi.teachmeskills.by/auth/jwt/create/',
            {
                method:"POST",
                body: JSON.stringify(userLogin),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data =await responce.json()
            console.log(data)
            localStorage.setItem('Login',JSON.stringify(data))
         
    }
    catch(error){
        return rejectWithValue((error as Error).message)
    }
})
export const refreshToken=createAsyncThunk('user/refreshToken',async (_,{rejectWithValue})=>{
    try{
        const {refresh}= JSON.parse(localStorage.getItem('Login'))
        const responce =await fetch('https://studapi.teachmeskills.by/auth/jwt/refresh/',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({refresh:refresh}),
        })
        const data = await responce.json()

        localStorage.setItem('Login',JSON.stringify({refresh:refresh,access:data.access}))
   
    }
    catch (error) {
        return rejectWithValue((error as Error).message)
    }
})
export const getUserInfo=createAsyncThunk('user/getUserInfo',async (_,{rejectWithValue,dispatch}) => {
    try{
            const {access}= JSON.parse(localStorage.getItem('Login'))
     
            const responce =await fetch('https://studapi.teachmeskills.by/auth/users/me/',{
                method:"GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + access 
                },
            })
            if(responce.status===401){
              dispatch(refreshToken())
            }
            if(!responce.ok){
                throw new Error("MY ERROR")
            }
            const data = await responce.json()
            dispatch(addUser(data))
    }
    catch (error) {
        return rejectWithValue((error as Error).message)
    }
})
const favoritesSlice = createSlice({
    name:'user',
    initialState:{
       user:{username:'somthing'},
       tokenStatus:false
    }
    ,
    reducers:{
        addUser(state,action){
            state.user=action.payload
        },
        
    },
    extraReducers:builder=>{
    builder.addCase(getUserInfo.rejected,(state,action)=>{

        console.log(action)
})
    }
})
export const {addUser}=favoritesSlice.actions
export default favoritesSlice.reducer