import Box from '@mui/material/Box';
import { BoxWrapper } from 'components/BoxWrapper';
import { Photo } from 'components/Photo/Photo';
import { CustomizedAccordion } from 'components/Accordion';
import { Banner } from 'components/Banner';
import { Person } from 'components/Person';

export const Home = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <BoxWrapper side={'left'} page={'home'}>
                <Box sx={{ mt: 2 }}>
                    <Person side={'left'} />
                    <Photo />
                    <CustomizedAccordion />
                </Box>
            </BoxWrapper>
            <BoxWrapper side={'right'} page={'home'}>
                <Box sx={{ mt: 2 }}>
                    <Person side={'right'} />
                    <Banner />
                </Box>
            </BoxWrapper>
        </Box>
    );
};
