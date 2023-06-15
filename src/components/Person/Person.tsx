import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { firebaseDeleteDoc } from 'firebase/firestoreDatabase';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRequiredDoc } from 'hooks/useRequiredDoc';
import { selectData } from 'redux/getDataSlice';
import { sxIconButtonColor } from 'theme/sxIconButtonColor';
import { selectTheming } from 'redux/themingSlice';
import { AlertDialogSlide } from 'components/Dialog';
import { AppDispatch } from 'redux/store';
import { selectAuth } from 'redux/authSlice';
import { CustomSkeleton } from 'components/Skeleton';
import { skeleton } from './skeletonProps';

type TProps = {
    side: 'right' | 'left';
};

const sxItems = () => {
    return {
        pl: 2,
        pr: 2,
        mb: 2,
    };
};

export const Person = ({ side }: TProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [name, setName] = useState<string | null>(null);

    const dispatch = useDispatch<AppDispatch>();

    const userName = useRequiredDoc('name');
    const { uploadButton } = useSelector(selectTheming);
    const { access } = useSelector(selectAuth);

    const handleOpen = (name?: string | null) => {
        if (name) {
            setName(name);
        }

        setOpen(true);
    };

    const handleClose = (value: 'Cancel' | 'Ok') => {
        if (value === 'Ok') {
            firebaseDeleteDoc(name, null, null, null, dispatch);
        }
        setOpen(false);
    };

    const { loading } = useSelector(selectData);

    const isRenderDeleteButton = (actionName: string | null) => {
        if (!uploadButton && access === 0) {
            return (
                <IconButton
                    sx={sxIconButtonColor()}
                    onClick={handleOpen.bind(null, actionName)}
                >
                    <DeleteIcon />
                </IconButton>
            );
        } else {
            return null;
        }
    };

    return (
        <Box
            sx={(theme) => ({
                ...(side === 'left' && {
                    [theme.breakpoints.up('tablet')]: {
                        display: 'none',
                    },
                }),
            })}
        >
            <CustomSkeleton
                loading={loading}
                spacing={1}
                skeletonProps={skeleton}
            />
            {loading === 'succeeded' && (
                <Box sx={sxItems()}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant={'h2'} sx={{ mr: 1 }}>
                            {userName?.firstName}
                        </Typography>
                        {userName && isRenderDeleteButton('name')}
                    </Box>
                    <Typography variant={'h2'}>
                        {userName?.secondName}
                    </Typography>
                    <Typography variant={'h5'} component={'h1'}>
                        {userName?.position}
                    </Typography>
                </Box>
            )}
            <AlertDialogSlide
                open={open}
                handleClose={handleClose}
                actionName={'name'}
                name={name}
            />
        </Box>
    );
};
