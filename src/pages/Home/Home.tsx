import Box from '@mui/material/Box';
import { BoxWrapper } from 'components/BoxWrapper';
import { Photo } from 'components/Photo/Photo';
import { CustomizedAccordion } from 'components/Accordion';

export const Home = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <BoxWrapper side={'left'} page={'home'}>
                <Photo />
                <CustomizedAccordion />
            </BoxWrapper>
            <BoxWrapper side={'right'} page={'home'}>
                <Box sx={{ mt: 2 }}>
                    <Box>Home</Box>
                </Box>
            </BoxWrapper>
        </Box>
    );
};
