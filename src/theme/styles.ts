import { Theme } from '@mui/material';
import { normalize } from 'styled-normalize';

export const styles = (theme: Theme) => ({
    ...{ normalize },
    body: {
        overflowY: 'overlay',
    },
    ['*']: {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        scrollBehavior: 'smooth',

        ['::-webkit-scrollbar']: {
            width: '6px',
            height: '5px',
        },
        ['::-webkit-scrollbar-corner']: {
            height: 0,
        },
        ['::-webkit-scrollbar-track']: {
            backgroundColor: 'transparent',
            bordeRadius: '25px',
        },
        ['::-webkit-scrollbar-thumb']: {
            backgroundColor: theme.palette.primary.background.primary,
            borderRadius: '25px',
        },
    },

    h1: {
        margin: 0,
    },
    h2: {
        margin: 0,
    },
    h3: {
        margin: 0,
    },
    h4: {
        margin: 0,
    },
    h5: {
        margin: 0,
    },
    h6: {
        margin: 0,
    },
    p: {
        margin: 0,
    },
    ol: {
        margin: 0,
        paddingLeft: 0,
    },
    ul: {
        margin: 0,
        paddingLeft: 0,
    },
    button: { cursor: 'pointer' },
    img: {
        display: 'block',
        height: 'auto',
        maxWidth: '100%',
    },
    a: {
        textDecoration: 'none',
        color: 'inherit',
    },
    li: {
        listStyle: 'none',
        padding: 0,
    },
});
