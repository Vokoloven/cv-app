import { Theme } from '@mui/material/styles';

type TProps = {
    [x: string]: string | number;
} | null;

export const sxTypographyColor = (props: TProps) => {
    return (theme: Theme) => ({
        ...props,
        ...(theme.palette.mode === 'light'
            ? {
                  color: 'primary.typography.text.complementary',
              }
            : {
                  color: 'primary.typography.text.primary',
              }),
    });
};
