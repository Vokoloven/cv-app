import { useState } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import { sxSpeedDial } from './style/sxSpeedDial';
import { TAppBar } from 'types/globalTypes';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { useCustomLocation } from 'hooks/useCustomLocation';
import { actionsHandler } from './actionsHandler';
import { useSelector } from 'react-redux';
import { selectTheming } from 'redux/themingSlice/selectTheming';
import { selectAuth } from 'redux/authSlice/selectAuth';
import { NestedModal } from 'components/Modal/NestedModal';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { capitalize } from '@mui/material';
import {
    useWindowDimensions,
    getWindowDimension,
} from 'hooks/useWindowDimensions';

type TActions = { icon: JSX.Element; name: string };

const actions: TActions[] = [
    { icon: <PersonIcon />, name: 'name' },
    { icon: <InfoIcon />, name: 'summary' },
    { icon: <AccountTreeIcon />, name: 'projects' },
    { icon: <WorkIcon />, name: 'experience' },
    { icon: <SchoolIcon />, name: 'education' },
    { icon: <CloudDownloadIcon />, name: 'cv' },
];

export function SpeedDialTooltipOpen({ side }: Pick<TAppBar, 'side'>) {
    const pathname = useCustomLocation();
    const [open, setOpen] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [actionName, setActionName] = useState<string | null>(null);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { uploadButton } = useSelector(selectTheming);
    const { access } = useSelector(selectAuth);

    const { width } = useWindowDimensions(getWindowDimension);

    const onClickHandler = (actionName: string) => {
        handleClose();
        setActionName(actionName);
        setOpenModal(true);
    };

    const isRenderSpeedDial = (access: number) => {
        if (access === 0) {
            return (
                <Box
                    sx={(theme) => ({
                        position: 'fixed',
                        right: 0,
                        top: '100px',
                        height: 330,
                        transform: 'translateZ(0px)',

                        zIndex: 1,
                        flexGrow: 1,
                        ...(side === 'left' && {
                            [theme.breakpoints.up('tablet')]: {
                                display: 'none',
                            },
                            // ...(pathname === '/' && { display: 'none' }),
                        }),
                        ...(side === 'right' && {
                            [theme.breakpoints.down('tablet')]: {
                                display: 'none',
                            },
                        }),
                        // [theme.breakpoints.up('desktop')]: {
                        //     right: 'calc(50% - 800px)',
                        // },
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
                        hidden={uploadButton ? true : false}
                    >
                        {actionsHandler(actions, pathname, side, width)?.map(
                            (action) => (
                                <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={
                                        action.name === 'cv'
                                            ? action.name?.toUpperCase()
                                            : capitalize(action.name)
                                    }
                                    tooltipOpen
                                    onClick={onClickHandler.bind(
                                        null,
                                        action?.name
                                    )}
                                />
                            )
                        )}
                    </SpeedDial>
                    <NestedModal
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        actionName={actionName}
                    />
                </Box>
            );
        } else {
            return null;
        }
    };

    return isRenderSpeedDial(access);
}
