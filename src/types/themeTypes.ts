type TCustomTypeHandler<T> = T;

export type TInitialStateTheming = TCustomTypeHandler<{
    colorMode: 'light' | 'dark';
    uploadButton: null | 'hidden';
}>;
export type TColorMode = TCustomTypeHandler<'light' | 'dark'>;

export type THideMode = TCustomTypeHandler<null | 'hidden'>;
