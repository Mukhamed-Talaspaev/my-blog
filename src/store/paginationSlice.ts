import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const API_URL='https://studapi.teachmeskills.by/blog/posts/'
export const fetchPosts = createAsyncThunk(
    'pagination/fetchPosts',
    async ({ limit, offset, search,ordering }) => {
        const response = await fetch(`${API_URL}?author__course_group=7&limit=${limit}&offset=${offset}&search=${search}&ordering=${ordering}`);
        const data = await response.json()
        return data;
    }
);
const paginationSlice =createSlice({
    name:'pagination',
    initialState:{
        post:[],
        currentPage:1,
        itemsPerPage:10,
        totalCount:0,
        status:'',
        error:null,
        searchQuery: '',
        ordering:'title'
    },
    reducers:{
        changeCurrentPage:(state,action)=>{
            state.currentPage=action.payload
            
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setOrdering: (state, action) => {
            state.ordering = action.payload;
        },
    },
    extraReducers:builder=>{
        builder.addCase(fetchPosts.pending,(state)=>{
            state.status="pending"
        })
        .addCase(fetchPosts.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.post=action.payload.results
            state.totalCount=action.payload.count
        })
        .addCase(fetchPosts.rejected,(state,action)=>{
            state.status="rejected",
            state.error=action.error.message
        })
    }
})
export const {changeCurrentPage,setSearchQuery,setOrdering}=paginationSlice.actions
export default paginationSlice.reducer