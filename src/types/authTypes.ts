import { User } from 'firebase/auth';

export type TInitialState = {
    user: User | null;
    access: number;
    token: string | null | undefined;
    errorMessage: string | null | unknown;
    authorized: boolean;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};
