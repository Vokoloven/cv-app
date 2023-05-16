import { createSlice } from '@reduxjs/toolkit';
import {
    loginUserByGoogle,
    logoutUserByGoogle,
} from 'redux/service/authUserByGoogle';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { TInitialState } from 'types/authTypes';

const ADMIN = import.meta.env.VITE_ADMIN;

enum Access {
    ADMIN,
    USER,
}

const persistConfig = {
    key: 'auth',
    storage,
};

const initialState: TInitialState = {
    user: null,
    access: Access.USER,
    token: null,
    errorMessage: null,
    authorized: false,
    loading: 'idle',
};

export const userAuthSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUserByGoogle.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(loginUserByGoogle.fulfilled, (state, { payload }) => {
            if (payload.user?.email === ADMIN) {
                state.access = Access.ADMIN;
            } else {
                state.access = Access.USER;
            }
            state.user = payload.user;
            state.token = payload.token;
            state.authorized = true;
            state.loading = 'succeeded';
            state.errorMessage = null;
        });
        builder.addCase(loginUserByGoogle.rejected, (state, { payload }) => {
            state.authorized = false;
            state.errorMessage = payload;
            state.loading = 'failed';
        });
        builder.addCase(logoutUserByGoogle.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(logoutUserByGoogle.fulfilled, (state, { payload }) => {
            state.access = Access.USER;
            state.user = null;
            state.token = null;
            state.authorized = payload;
            state.loading = 'succeeded';
            state.errorMessage = null;
        });
        builder.addCase(logoutUserByGoogle.rejected, (state, { payload }) => {
            state.authorized = true;
            state.errorMessage = payload;
            state.loading = 'failed';
        });
    },
});

export const persistedAuthReducer = persistReducer(
    persistConfig,
    userAuthSlice.reducer
);
