import Box from '@mui/material/Box';
import { BoxWrapper } from 'components/BoxWrapper';
import { Photo } from 'components/Photo/Photo';
import { CustomizedAccordion } from 'components/Accordion';

export const Projects = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <BoxWrapper side={'left'} page={'projects'}>
                <Box sx={{ mt: 2 }}>
                    <Photo />
                    <CustomizedAccordion />
                </Box>
            </BoxWrapper>
            <BoxWrapper side={'right'} page={'projects'}>
                <Box sx={{ mt: 2 }}>Projects</Box>
            </BoxWrapper>
        </Box>
    );
};
