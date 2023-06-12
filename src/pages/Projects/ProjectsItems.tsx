import { useRequiredDoc } from 'hooks/useRequiredDoc';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const ProjectsItems = () => {
    const items = useRequiredDoc('projects')?.projects;

    return <Box>HUI</Box>;
};
