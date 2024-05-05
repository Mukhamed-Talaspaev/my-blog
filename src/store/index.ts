
import {configureStore} from '@reduxjs/toolkit'
import todosSlice from './todosSlice'
import favoritesSlice from './favoritesSlice'

export default configureStore({
reducer:{
    todos:todosSlice,
    favorites:favoritesSlice
}
})