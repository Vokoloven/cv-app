import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { themingSlice, persistedThemingReducer } from './themingSlice';
import { userAuthSlice, persistedAuthReducer } from './authSlice';
import { persistStore } from 'redux-persist';

const rootReducer = combineReducers({
    [userAuthSlice.name]: persistedAuthReducer,
    [themingSlice.name]: persistedThemingReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            thunk: true,
            immutableCheck: false,
        }),
});
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
