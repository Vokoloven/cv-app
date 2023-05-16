import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ColorSwitch from 'components/Switch/Switch';
import { sxTypographyColor } from 'theme/sxTypographyColor';

export const Mode = () => {
    return (
        <>
            <Typography
                sx={sxTypographyColor({ fontWeight: 'bold', pl: 2, mt: 2 })}
                variant={'button'}
                component={'p'}
            >
                Mode:
            </Typography>
            <Box
                sx={{
                    pl: 2,
                    pr: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography
                    sx={sxTypographyColor(null)}
                    variant={'body1'}
                    component={'p'}
                >
                    Light
                </Typography>
                <ColorSwitch />
                <Typography
                    variant={'body1'}
                    component={'p'}
                    sx={sxTypographyColor(null)}
                >
                    Dark
                </Typography>
            </Box>
        </>
    );
};
