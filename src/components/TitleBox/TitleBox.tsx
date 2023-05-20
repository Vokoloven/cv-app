import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TChildren } from 'types/globalTypes';

export const TitleBox = ({ children }: TChildren) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',

                mt: 5,
                width: '100%',
                height: 80,

                bgcolor: 'primary.background.primary',
            }}
        >
            <Typography
                variant={'h3'}
                component={'h3'}
                sx={{
                    color: 'primary.typography.text.primary',
                    fontWeight: 'bold',
                    ml: 2,
                }}
            >
                {children}
            </Typography>
        </Box>
    );
};
