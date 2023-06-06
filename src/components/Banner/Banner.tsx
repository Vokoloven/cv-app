import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BannerItems } from '.';
import { Spinner } from 'components/Spinner/Spinner';
import { useSelector } from 'react-redux';
import { selectData } from 'redux/getDataSlice';

const bannerHeadres: { name: string }[] = [
    { name: 'Summary' },
    { name: 'Experience' },
    { name: 'Education' },
];

export const Banner = () => {
    const { loading } = useSelector(selectData);

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

                    <Spinner loading={loading} />
                    {loading === 'succeeded' && <BannerItems name={name} />}
                </Box>
            ))}
        </Box>
    );
};
