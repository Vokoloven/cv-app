import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { AlertDialogSlide } from 'components/Dialog';
import { firebaseDeleteDoc } from 'firebase/firestoreDatabase';
import { useRequiredDoc } from 'hooks/useRequiredDoc';
import { sxIconButtonColor } from 'theme/sxIconButtonColor';

type TItem = {
    projectName: string;
    tools: string;
    link: string;
    description: string;
    id: string;
    repo: string;
    photo: string;
    path: string;
};

type TProps = {
    item: TItem;
};

export const PositionedPopper = ({ item }: TProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [openPopper, setOpenPopper] = useState(false);
    const [placement, setPlacement] = useState<PopperPlacementType>();
    const [open, setOpen] = useState<boolean>(false);

    const projects = useRequiredDoc('projects')?.projects;

    const dispatch = useDispatch();

    const handleClick =
        (newPlacement: PopperPlacementType) =>
        (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
            setOpenPopper((prev) => placement !== newPlacement || !prev);
            setPlacement(newPlacement);
        };

    const handleClose = (value: 'Cancel' | 'Ok') => {
        if (value === 'Ok') {
            firebaseDeleteDoc(
                'projects',
                projects,
                item?.id,
                item?.path,
                dispatch
            );
        }
        setOpen(false);
    };

    const handleClickDelete = () => {
        setOpenPopper(false);
        setOpen(true);
    };

    return (
        <Box sx={{ width: 500 }}>
            <Popper
                open={openPopper}
                anchorEl={anchorEl}
                placement={placement}
                transition
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <IconButton
                                onClick={handleClickDelete}
                                sx={sxIconButtonColor()}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <IconButton
                aria-label="settings"
                onClick={handleClick('bottom')}
                sx={sxIconButtonColor()}
            >
                <MoreVertIcon />
            </IconButton>
            <AlertDialogSlide
                open={open}
                handleClose={handleClose}
                actionName={'projects'}
                name={item?.projectName}
            />
        </Box>
    );
};
