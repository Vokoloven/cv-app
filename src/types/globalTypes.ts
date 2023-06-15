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

export type TSkeleton = {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    spacing: number;
    skeletonProps: {
        id?: string;
        variant?: 'text' | 'rectangular' | 'rounded' | 'circular';
        width?: number | string;
        height?: number | string;
    }[];
};

export type TSkeletonProps = {
    id?: string;
    variant?: 'text' | 'rectangular' | 'rounded' | 'circular';
    width?: number | string;
    height?: number | string;
}[];

export type TSetStateBoolean = Dispatch<SetStateAction<boolean>>;

export type TSetStateString = Dispatch<SetStateAction<string | null>>;
