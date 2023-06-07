import { Theme } from '@mui/material/styles';

export const sxSpeedDial = () => {
    return (theme: Theme) => ({
        '& 	.MuiSpeedDial-fab': {
            ...(theme.palette.mode === 'light'
                ? {
                      color: `${theme.palette.primary.button.triadic.primary}`,
                      bgcolor: `${theme.palette.primary.button.complementary}`,
                      '&:hover': {
                          bgcolor: `${theme.palette.primary.button.complementary}`,
                      },
                  }
                : {
                      color: `${theme.palette.primary.button.triadic.primary}`,
                      bgcolor: `${theme.palette.primary.button.primary}`,
                      '&:hover': {
                          bgcolor: `${theme.palette.primary.button.primary}`,
                      },
                  }),
        },
        '& .MuiSpeedDialIcon-icon': {
            color: `${theme.palette.primary.button.triadic.primary}`,
        },
        '& .MuiSpeedDialIcon-openIcon': {
            color: `${theme.palette.primary.button.triadic.primary}`,
        },
        '& .MuiSpeedDialAction-fab': {
            ...(theme.palette.mode === 'light'
                ? {
                      color: `${theme.palette.primary.button.complementary}`,
                      '&:hover': {
                          bgcolor: `${theme.palette.primary.button.triadic.primary}`,
                      },
                  }
                : {
                      bgcolor: `${theme.palette.primary.button.triadic.complementary}`,
                      backgroundImage: `${theme.palette.primary.background.linearGradient}`,
                      color: `${theme.palette.primary.button.primary}`,
                      '&:hover': {
                          bgcolor: `${theme.palette.primary.button.triadic.complementary}`,
                          backgroundImage: `${theme.palette.primary.background.linearGradient}`,
                      },
                  }),
        },
        '& .MuiSpeedDialAction-staticTooltipLabel': {
            ...(theme.palette.mode === 'light'
                ? {
                      color: `${theme.palette.primary.button.complementary}`,
                  }
                : {
                      color: `${theme.palette.primary.button.primary}`,
                      bgcolor: `${theme.palette.primary.button.triadic.complementary}`,
                      backgroundImage: `${theme.palette.primary.background.linearGradient}`,
                  }),
        },
    });
};
