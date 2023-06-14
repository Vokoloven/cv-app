import Box from '@mui/material/Box';
import { BoxWrapper } from 'components/BoxWrapper';
import { Photo } from 'components/Photo/Photo';
import { CustomizedAccordion } from 'components/Accordion';
import { ProjectsItems } from '.';
import { useCustomLocation } from 'hooks/useCustomLocation';
import {
    getWindowDimension,
    useWindowDimensions,
} from 'hooks/useWindowDimensions';

export const Projects = () => {
    const pathName = useCustomLocation();
    const { width } = useWindowDimensions(getWindowDimension);

    const handleProjectItems = () => {
        if (pathName === '/' && width < 768) {
            return (
                <>
                    <Photo />
                    <CustomizedAccordion />
                </>
            );
        } else if (pathName === '/projects' && width < 768) {
            return <ProjectsItems />;
        } else {
            return (
                <>
                    <Photo />
                    <CustomizedAccordion />
                </>
            );
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <BoxWrapper side={'left'}>
                <Box sx={{ mt: 2 }}>{handleProjectItems()}</Box>
            </BoxWrapper>
            <BoxWrapper side={'right'}>
                <Box sx={{ mt: 2 }}>
                    <ProjectsItems />
                </Box>
            </BoxWrapper>
        </Box>
    );
};
