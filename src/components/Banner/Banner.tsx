import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BannerItems } from '.';

const bannerHeadres: { name: string }[] = [
    { name: 'Summary' },
    { name: 'Experience' },
    { name: 'Education' },
];

export const Banner = () => {
    return (
        <Box>
            {bannerHeadres.map(({ name }) => (
                <Box key={name}>
                    <Box
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',

                            width: '100%',
                            height: '80px',
                            mb: 2,
                            ...(theme.palette.mode === 'light'
                                ? { bgcolor: 'primary.background.primary' }
                                : {
                                      backgroundColor:
                                          'primary.background.triadic.complementary',
                                      backgroundImage: `${theme.palette.primary.background.linearGradient}`,
                                  }),
                        })}
                    >
                        <Typography
                            variant={'h3'}
                            component={'h2'}
                            sx={{
                                ml: 2,
                                color: 'primary.typography.text.primary',
                            }}
                        >
                            {name}
                        </Typography>
                    </Box>
                    <BannerItems name={name} />
                </Box>
            ))}
        </Box>
    );
};
