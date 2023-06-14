import Box from '@mui/material/Box';
import { BoxWrapper } from 'components/BoxWrapper';
import { Aside } from 'components/Aside/Aside';
import { ResponsiveAppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { SpeedDialTooltipOpen } from 'components/SpeedDial';

export const SharedLayout = () => {
    return (
        <Box sx={{ position: 'relative' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <BoxWrapper side={'left'}>
                    <Aside />
                    <SpeedDialTooltipOpen side={'left'} />
                </BoxWrapper>
                <BoxWrapper side={'right'}>
                    <ResponsiveAppBar side={'right'} />
                    <SpeedDialTooltipOpen side={'right'} />
                </BoxWrapper>
            </Box>
            <Outlet />
        </Box>
    );
};
