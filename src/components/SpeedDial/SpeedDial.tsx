import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import { sxSpeedDial } from './style/sxSpeedDial';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];

export function SpeedDialTooltipOpen() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box
            sx={(theme) => ({
                position: 'absolute',
                right: 0,
                top: '100px',

                height: 330,
                transform: 'translateZ(0px)',
                flexGrow: 1,
                [theme.breakpoints.down('tablet')]: {
                    display: 'none',
                },
            })}
        >
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                sx={sxSpeedDial()}
                icon={<SpeedDialIcon openIcon={<DataSaverOnIcon />} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                direction={'down'}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}
