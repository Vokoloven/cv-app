import { Theme } from '@mui/material';

export const sxIcon = () => {
    return (theme: Theme) => ({
        ...(theme.palette.mode === 'light'
            ? {
                  color: `${theme.palette.primary.button.complementary}`,
              }
            : {
                  color: `${theme.palette.primary.button.primary}`,
              }),
    });
};
