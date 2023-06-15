import Box from '@mui/material/Box';
import { BoxWrapper } from 'components/BoxWrapper';
import { Aside } from 'components/Aside/Aside';
import { ResponsiveAppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { SpeedDialTooltipOpen } from 'components/SpeedDial';
import {
    useWindowDimensions,
    getWindowDimension,
} from 'hooks/useWindowDimensions';

export const SharedLayout = () => {
    const { width } = useWindowDimensions(getWindowDimension);

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
                    {width < 768 && <Outlet />}
                </BoxWrapper>
                <BoxWrapper side={'right'}>
                    <ResponsiveAppBar side={'right'} />
                    <SpeedDialTooltipOpen side={'right'} />
                    <Outlet />
                </BoxWrapper>
            </Box>
        </Box>
    );
};
