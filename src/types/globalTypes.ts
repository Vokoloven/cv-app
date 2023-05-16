import { ReactNode } from 'react';

export type TChildren = {
    children: ReactNode;
};

export type TAppBar = { side: 'left' | 'right' };

export type TSpinner = {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};
