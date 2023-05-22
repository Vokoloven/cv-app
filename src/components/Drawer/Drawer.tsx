import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { Settings } from './Settings';
import { Download } from './Download';
import { Mode } from './Mode';
import { Login } from './Login/Login';
import { sxIconButtonColorSecondary } from 'theme/sxIconButtonColor';
import Tooltip from '@mui/material/Tooltip';

type Anchor = 'right';

export function TemporaryDrawer() {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const list = () => (
        <Box
            sx={{
                width: 250,
                color: 'primary.typography.text.complementary',
            }}
            role="settings"
        >
            <Settings toggleDrawer={toggleDrawer} />
            <Divider />
            <Login />
            <Download />
            <Mode />
        </Box>
    );

    return (
        <Box>
            <Tooltip title={'Settings'}>
                <IconButton
                    aria-label="settings"
                    onClick={toggleDrawer('right', true)}
                    sx={sxIconButtonColorSecondary()}
                >
                    <SettingsIcon />
                </IconButton>
            </Tooltip>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list()}
            </Drawer>
        </Box>
    );
}
