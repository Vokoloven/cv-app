import { Theme } from '@mui/material';

type TProps = {
    [x: string]: string | number;
} | null;

export const sxFormsProps = (props: TProps) => {
    return (theme: Theme) => ({
        ...props,
        '& label.Mui-focused': {
            color: `${theme.palette.primary.typography.text.complementary}`,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#E0E3E7',
            },
            '&:hover fieldset': {
                borderColor: '#B2BAC2',
            },
            '&.Mui-focused fieldset': {
                borderColor: `${theme.palette.primary.background.primary}`,
            },
        },
    });
};
