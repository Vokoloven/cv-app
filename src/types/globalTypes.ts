import { ReactNode } from 'react';
import { Dispatch, SetStateAction } from 'react';

export type TChildren = {
    children: ReactNode;
};

export type TAppBar = {
    side: 'left' | 'right';
};

export type TSpinner = {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

export type TSetStateBoolean = Dispatch<SetStateAction<boolean>>;

export type TSetStateString = Dispatch<SetStateAction<string | null>>;
