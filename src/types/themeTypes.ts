type TGenericColorMode<T> = T

export type TInitialStateTheming = TGenericColorMode<{
    colorMode: 'light' | 'dark'
}>
export type TColorMode = TGenericColorMode<'light' | 'dark'>
