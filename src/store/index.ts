
import {configureStore} from '@reduxjs/toolkit'
import todosSlice from './todosSlice'
import favoritesSlice from './favoritesSlice'
import userSlice from './userSlice'

export default configureStore({
reducer:{
    todos:todosSlice,
    favorites:favoritesSlice,
    user:userSlice
}
})