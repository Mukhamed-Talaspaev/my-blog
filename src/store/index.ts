
import {configureStore} from '@reduxjs/toolkit'
import todosSlice from './todosSlice'
import favoritesSlice from './favoritesSlice'
import userSlice from './userSlice'
import paginationSlice from './paginationSlice'
import postSlice from './postSlice'

export default configureStore({
reducer:{
    todos:todosSlice,
    favorites:favoritesSlice,
    user:userSlice,
    pagination:paginationSlice,
    post:postSlice
}
})