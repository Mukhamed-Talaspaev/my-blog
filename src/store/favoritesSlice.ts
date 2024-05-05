import { createSlice } from "@reduxjs/toolkit";
import { ICard } from "../types/types";

const favoritesSlice = createSlice({
    name:'favorite',
    initialState:{
        favoritePosts:[]
    },
    reducers:{
        addFavoritePost(state:{favoritePosts:ICard[]},action:{
            payload: {post:ICard};
            type: string;
        }){
           state.favoritePosts.push(action.payload.post)
        }
        
    }
})
export const {addFavoritePost}=favoritesSlice.actions
export default favoritesSlice.reducer