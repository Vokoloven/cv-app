import Box from '@mui/material/Box';
import { Banner } from 'components/Banner';

import { BoxWrapper } from 'components/BoxWrapper';

export const Summary = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <BoxWrapper side={'left'} page={'summary'}>
                <Box sx={{ mt: 2 }}>
                    <Banner />
                </Box>
            </BoxWrapper>
        </Box>
    );
};
