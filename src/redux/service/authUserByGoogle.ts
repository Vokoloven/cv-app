import { createAsyncThunk } from '@reduxjs/toolkit';
import { provider, auth } from '../../firebase/config';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
3;
import { User } from 'firebase/auth';

type TLogin = {
    user: User;
    token: string | undefined;
};

export const loginUserByGoogle = createAsyncThunk(
    'login/userByGoogle',
    async (_, { rejectWithValue }) => {
        const promise: Promise<TLogin> = new Promise((resolve, reject) => {
            (async () => {
                try {
                    const result = await signInWithPopup(auth, provider);
                    const credential =
                        GoogleAuthProvider.credentialFromResult(result);
                    const token = credential?.accessToken;
                    const user = result.user;

                    if (result) {
                        resolve({ token, user });
                    }
                } catch (error) {
                    reject(error);
                }
            })();
        });
        return promise
            .then((result) => result)
            .catch((error) => rejectWithValue(error.message));
    }
);

export const logoutUserByGoogle = createAsyncThunk(
    'logout/userByGoogle',
    async (_, { rejectWithValue }) => {
        const promise: Promise<boolean> = new Promise((resolve, reject) => {
            (async () => {
                try {
                    if (auth.currentUser === null) {
                        throw new Error('You are still authorized');
                    }
                    await signOut(auth);
                    if (auth.currentUser === null) {
                        resolve(false);
                    }
                } catch (error) {
                    reject(error);
                }
            })();
        });
        return promise
            .then((result) => result)
            .catch((error) => rejectWithValue(error.message));
    }
);
