import Box from '@mui/material/Box';
import { BoxWrapper } from 'components/BoxWrapper';
import { Photo } from 'components/Photo/Photo';
import { CustomizedAccordion } from 'components/Accordion';
import { SpeedDialTooltipOpen } from 'components/SpeedDial';

export const Home = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <BoxWrapper side={'left'}>
                <Photo />
                <CustomizedAccordion />
            </BoxWrapper>
            <BoxWrapper side={'right'}>
                <Box sx={{ mt: 2 }}>
                    <SpeedDialTooltipOpen />
                </Box>
            </BoxWrapper>
        </Box>
    );
};
