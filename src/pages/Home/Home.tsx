import Box from '@mui/material/Box';
import { BoxWrapper } from 'components/BoxWrapper';
import { Banner } from 'components/Banner';
import { Person } from 'components/Person';

export const Home = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <BoxWrapper side={'right'}>
                <Box>
                    <Person side={'right'} />
                    <Banner />
                </Box>
            </BoxWrapper>
        </Box>
    );
};
