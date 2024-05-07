import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createUser=createAsyncThunk('user/createUser',async (signinObj:{
    username: number;
    email: string;
    password: string;
    course_group: number;
},{rejectWithValue,dispatch})=>{
    try {
        const responce = await fetch('https://studapi.teachmeskills.by/auth/users/',{
            method: 'POST',
            body: JSON.stringify({
                "username": signinObj.username,
                "email": signinObj.email,
                "password": signinObj.password,
                "course_group": 7
              }),
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": "2u9EiabuRdAvpzVVsb1AyBCN4NHiCd5Ea3MCV5Pzj5kaopDjEW0Dqhmb3jXgmn3p"
            },
          })
       

        if(!responce.ok){
            throw new Error('Error is here  ):')
        }
        const data = await responce.json()
//      data=  {
//   "id": 8222,
//   "username": "Mukhamed",
//   "email": "mukhamed.talaspayev@gmail.com",
//   "course_group": 7
// }

        dispatch(addUser(data))
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