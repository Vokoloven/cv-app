import { Theme } from '@mui/material/styles';

export const sxNavLink = (pathname: string, page: string) => {
    const handlePathname = (pathname: string) => {
        switch (pathname) {
            case '/':
                return 'Home';
                break;

            case '/projects':
                return 'Projects';
                break;

            case '/summary':
                return 'Summary';
                break;

            default:
                return 'Home';
                break;
        }
    };

    return (theme: Theme) => ({
        ...(theme.palette.mode === 'light'
            ? {
                  color: 'primary.button.complementary',
                  '&:hover': {
                      backgroundColor: 'primary.button.analogous.complementary',
                  },
                  ...(handlePathname(pathname) === page && {
                      bgcolor: `${theme.palette.primary.button.analogous.primary}`,
                  }),
              }
            : {
                  color: 'primary.button.primary',
                  '&:hover': {
                      backgroundColor: 'primary.button.analogous.primary',
                  },
                  ...(handlePathname(pathname) === page && {
                      bgcolor: `${theme.palette.primary.button.analogous.complementary}`,
                  }),
              }),
    });
};
