import { useRequiredDoc } from 'hooks/useRequiredDoc';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { CustomCard } from 'components/Card';

type TItem = {
    projectName: string;
    tools: string;
    link: string;
    description: string;
    id: string;
    repo: string;
    photo: string;
    path: string;
};

export const ProjectsItems = () => {
    const items = useRequiredDoc('projects')?.projects;

    return (
        <Box sx={{ flexGrow: 1, px: 2, pb: 2 }}>
            <Grid
                container
                spacing={{ mobile: 1, tablet: 3 }}
                columns={{ mobile: 2.5, tablet: 8, laptop: 12 }}
                sx={(theme) => ({
                    [theme.breakpoints.down('tablet')]: {
                        justifyContent: 'center',
                    },
                })}
            >
                {items?.length > 0 &&
                    items.map((item: TItem) => (
                        <Grid mobile={2} tablet={4} laptop={4} key={item?.id}>
                            <CustomCard item={item} />
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
};
