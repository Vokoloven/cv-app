import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BannerItems } from '.';
import { useSelector } from 'react-redux';
import { selectData } from 'redux/getDataSlice';
import { CustomSkeleton } from 'components/Skeleton';
import { skeleton } from './skeletonProps';

const bannerHeadres: { actionName: string }[] = [
    { actionName: 'Summary' },
    { actionName: 'Experience' },
    { actionName: 'Education' },
];

export const Banner = () => {
    const { loading } = useSelector(selectData);

    return (
        <Box>
            {bannerHeadres.map(({ actionName }) => (
                <Box key={actionName}>
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
                            sx={(theme) => ({
                                pl: 2,
                                ...(theme.palette.mode === 'light'
                                    ? {
                                          color: 'primary.typography.text.primary',
                                      }
                                    : {
                                          color: 'primary.typography.text.complementary',
                                      }),
                            })}
                        >
                            {actionName}
                        </Typography>
                    </Box>
                    <CustomSkeleton
                        loading={loading}
                        spacing={1}
                        skeletonProps={skeleton}
                    />
                    {loading === 'succeeded' && (
                        <BannerItems actionName={actionName.toLowerCase()} />
                    )}
                </Box>
            ))}
        </Box>
    );
};
