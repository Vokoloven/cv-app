import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import { themingSlice, persistedThemingReducer } from './themingSlice'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    [themingSlice.name]: persistedThemingReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
})
export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
