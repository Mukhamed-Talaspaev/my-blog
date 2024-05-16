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
const favoritesSlice = createSlice({
    name:'user',
    initialState:{
       user:null
    },
    reducers:{
        addUser(state,action){
            state.user=action.payload
        },
        
    }
})
export const {addUser}=favoritesSlice.actions
export default favoritesSlice.reducer