import { useSelector } from 'react-redux';
import { useRequiredDoc } from 'hooks/useRequiredDoc';
import { selectData } from 'redux/getDataSlice';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { CustomCard } from 'components/Card';
import { CustomSkeleton } from 'components/Skeleton';
import { skeleton } from './skeletonProps';
import { reversedItems } from 'utils';

export type TItem = {
    projectName: string;
    tools: string;
    livePage: string;
    description: string;
    id: string;
    repo: string;
    photo: string;
    path: string;
};

export const ProjectsItems = () => {
    const items = useRequiredDoc('projects')?.projects;
    const { loading } = useSelector(selectData);

    return (
        <Box
            sx={(theme) => ({
                flexGrow: 1,
                [theme.breakpoints.down('tablet')]: {
                    pb: 2,
                },
            })}
        >
            <Grid
                container
                spacing={{ mobile: 1, tablet: 3 }}
                columns={{ mobile: 2.5, tablet: 8, laptop: 12 }}
                sx={(theme) => ({
                    width: '100%',
                    [theme.breakpoints.down('tablet')]: {
                        justifyContent: 'center',
                    },
                })}
            >
                {loading === 'pending' &&
                    ['1', '2', '3'].map((item) => (
                        <Grid mobile={2} tablet={4} laptop={4} key={item}>
                            <CustomSkeleton
                                loading={loading}
                                spacing={1}
                                skeletonProps={skeleton}
                            />
                        </Grid>
                    ))}
                {reversedItems(items)?.map((item: TItem) => (
                    <Grid mobile={2} tablet={4} laptop={4} key={item?.id}>
                        <CustomCard item={item} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
