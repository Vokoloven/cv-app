import { Theme } from '@mui/material/styles';

export const sxToggleButtonColor = () => {
    return (theme: Theme) => ({
        ...(theme.palette.mode === 'light'
            ? {
                  color: 'primary.button.complementary',
                  border: `1px solid${theme.palette.primary.button.complementary}`,
                  '&:hover': {
                      backgroundColor: 'primary.button.analogous.complementary',
                  },
                  '&.Mui-selected': {
                      color: 'primary.button.primary',
                      bgcolor: 'primary.button.analogous.primary',
                      border: `1px solid${theme.palette.primary.button.primary}`,
                      '&:hover': {
                          backgroundColor: 'primary.button.analogous.primary',
                      },
                  },
              }
            : {
                  color: 'primary.button.complementary',
                  border: `1px solid${theme.palette.primary.button.complementary}`,
                  '&:hover': {
                      backgroundColor: 'primary.button.analogous.secondary',
                  },
                  '&.Mui-selected': {
                      color: 'primary.button.primary',
                      bgcolor: 'primary.button.analogous.primary',
                      border: `1px solid${theme.palette.primary.button.primary}`,
                      '&:hover': {
                          backgroundColor: 'primary.button.analogous.primary',
                      },
                  },
              }),
    });
};
