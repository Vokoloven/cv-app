import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { BoxWrapper } from 'components/BoxWrapper';
import { Aside } from 'components/Aside/Aside';
import { ResponsiveAppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { SpeedDialTooltipOpen } from 'components/SpeedDial';

export const SharedLayout = () => {
    return (
        <Container
            maxWidth={'desktop'}
            sx={(theme) => ({
                display: 'flex',
                flexDirection: 'column',
                [theme.breakpoints.down('laptop')]: {
                    justifyContent: 'center',
                },
                [theme.breakpoints.down('tablet')]: {
                    padding: 0,
                },
            })}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <BoxWrapper side={'left'}>
                    <Aside />
                </BoxWrapper>
                <BoxWrapper side={'right'}>
                    <ResponsiveAppBar side={'right'} />
                </BoxWrapper>
            </Box>
            <Outlet />
        </Container>
    );
};
