import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { TInitialStateTheming, TColorMode, THideMode } from 'types/themeTypes';

const persistConfig = {
    key: 'theming',
    storage,
};

const initialState: TInitialStateTheming = {
    colorMode: 'light',
    uploadButton: null,
};

export const themingSlice = createSlice({
    name: 'theming',
    initialState,
    reducers: {
        colorModeSwitcher: (state, { payload }: PayloadAction<TColorMode>) => {
            state.colorMode = payload;
        },
        hideButton: (state, { payload }: PayloadAction<THideMode>) => {
            state.uploadButton = payload;
        },
    },
});

export const persistedThemingReducer = persistReducer(
    persistConfig,
    themingSlice.reducer
);
export const { colorModeSwitcher, hideButton } = themingSlice.actions;
