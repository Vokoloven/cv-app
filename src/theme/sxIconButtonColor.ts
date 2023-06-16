import { Theme } from '@mui/material/styles';

type TIconButton = {
    [x: string]: string | number | { [x: string]: string | number };
};

export const sxIconButtonColor = (props?: TIconButton) => {
    return (theme: Theme) => ({
        ...props,
        ...(theme.palette.mode === 'light'
            ? {
                  color: 'primary.button.complementary',
                  '&:hover': {
                      backgroundColor: 'primary.button.analogous.complementary',
                  },
              }
            : {
                  color: 'primary.button.primary',
                  '&:hover': {
                      backgroundColor: 'primary.button.analogous.primary',
                  },
              }),
    });
};

export const sxIconButtonColorSecondary = () => {
    return (theme: Theme) => ({
        ...(theme.palette.mode === 'light'
            ? {
                  color: 'primary.button.triadic.primary',
                  '&:hover': {
                      backgroundColor: 'primary.button.analogous.secondary',
                  },
              }
            : {
                  color: 'primary.button.primary',
                  '&:hover': {
                      backgroundColor: 'primary.button.analogous.primary',
                  },
              }),
    });
};
