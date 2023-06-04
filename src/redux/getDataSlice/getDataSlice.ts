import { createSlice } from '@reduxjs/toolkit';
import { getFirestoreDatabase } from 'redux/service/getFirestoreDatabase';
import { DocumentData } from 'firebase/firestore';

type TInitialState = {
    data: DocumentData;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    errorMessage: string | unknown;
};

const initialState: TInitialState = {
    data: [],
    loading: 'idle',
    errorMessage: '',
};

export const getDataSlice = createSlice({
    name: 'getData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFirestoreDatabase.pending, (state) => {
            state.loading = 'pending';
            state.errorMessage = '';
        });
        builder.addCase(
            getFirestoreDatabase.fulfilled,
            (state, { payload }) => {
                state.loading = 'succeeded';
                state.data = payload;
                state.errorMessage = '';
            }
        );
        builder.addCase(getFirestoreDatabase.rejected, (state, { payload }) => {
            state.loading = 'failed';
            state.errorMessage = payload;
        });
    },
});
