import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import IconButton from '@mui/material/IconButton';
import { sxTypographyColor } from 'theme/sxTypographyColor';

export const Download = () => {
    return (
        <Box
            sx={{
                mt: 2,
                pl: 2,
                pr: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Typography
                sx={sxTypographyColor({ fontWeight: 'bold' })}
                variant={'button'}
                component={'p'}
            >
                Download CV:
            </Typography>
            <IconButton
                aria-label="download-button"
                sx={(theme) => ({
                    ...(theme.palette.mode === 'light'
                        ? {
                              color: 'primary.button.complementary',
                              '&:hover': {
                                  backgroundColor:
                                      'primary.button.analogous.complementary',
                              },
                          }
                        : {
                              color: 'primary.button.primary',
                              '&:hover': {
                                  backgroundColor:
                                      'primary.button.analogous.primary',
                              },
                          }),
                })}
            >
                <CloudDownloadIcon
                    sx={(theme) => ({
                        ...(theme.palette.mode === 'light'
                            ? {
                                  color: 'primary.button.complementary',
                              }
                            : {
                                  color: 'primary.button.primary',
                              }),
                    })}
                />
            </IconButton>
        </Box>
    );
};
