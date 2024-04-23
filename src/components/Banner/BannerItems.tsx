import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRequiredDoc } from 'hooks/useRequiredDoc';
import { DocumentData } from 'firebase/firestore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectTheming } from 'redux/themingSlice';
import { sxIconButtonColor } from 'theme/sxIconButtonColor';
import { AlertDialogSlide } from 'components/Dialog';
import { AppDispatch } from 'redux/store';
import { firebaseDeleteDoc } from 'firebase/firestoreDatabase';
import { selectAuth } from 'redux/authSlice';
import { Modal } from 'components/Modal/Modal';

type TProps = { actionName: string };

const sxItems = () => {
    return {
        pl: 2,
        pr: 2,
        mb: 2,
    };
};

export const BannerItems = ({ actionName }: TProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [id, setId] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [index, setIndex] = useState<number | null>(null);

    const dispatch = useDispatch<AppDispatch>();

    const items = useRequiredDoc(actionName)?.[actionName];
    const { uploadButton } = useSelector(selectTheming);
    const { access } = useSelector(selectAuth);

    const handleOpen = (
        id?: string | null,
        name?: string | null,
        indexValue?: number | null
    ) => {
        indexValue !== undefined && setIndex(indexValue);
        id && setId(id);
        name && setName(name);

        setOpen(true);
    };

    const handleOpenModal = (id?: string | null) => {
        if (id) {
            setId(id);
        }

        setOpenModal(true);
    };

    const handleClose = (value: 'Cancel' | 'Ok') => {
        if (value === 'Ok') {
            name === 'subExperience'
                ? firebaseDeleteDoc(name, items, id, null, index, dispatch)
                : firebaseDeleteDoc(
                      actionName,
                      items,
                      id,
                      null,
                      index,
                      dispatch
                  );
        }
        setOpen(false);
    };
    const isRenderDeleteButton = (
        id: string | null,
        actionName: string | null
    ) => {
        if (!uploadButton && access === 0) {
            return (
                <IconButton
                    sx={sxIconButtonColor()}
                    onClick={handleOpen.bind(null, id, actionName, null)}
                >
                    <DeleteIcon />
                </IconButton>
            );
        } else {
            return null;
        }
    };

    const isRenderAddButton = (
        id: string | null,
        actionName: string | null
    ) => {
        if (!uploadButton && access === 0) {
            return (
                <IconButton
                    sx={sxIconButtonColor()}
                    onClick={handleOpenModal.bind(null, id, actionName)}
                >
                    <AddBoxIcon />
                </IconButton>
            );
        } else {
            return null;
        }
    };

    const renderedItemsByValue = (actionName: string) => {
        if (actionName === 'summary') {
            return (
                !!items && (
                    <Box sx={{ ...sxItems() }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant={'body1'}>{items}</Typography>
                            {isRenderDeleteButton(actionName, actionName)}
                        </Box>
                    </Box>
                )
            );
        } else if (actionName === 'experience') {
            return (
                !!items &&
                [...items].reverse().map(
                    ({ id, title, period, subExperience }: DocumentData) => (
                        <Box sx={sxItems()} key={id}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography
                                    variant={'h6'}
                                    component={'h3'}
                                    sx={{ mr: 1 }}
                                >
                                    {title}
                                </Typography>
                                {isRenderAddButton(id, title)}
                                {isRenderDeleteButton(id, title)}
                            </Box>
                            <Typography variant={'body1'}>{period}</Typography>
                            <Box component={'ul'}>
                                {subExperience?.length > 0 &&
                                    subExperience?.map(
                                        (item: string, index: number) => (
                                            <Box
                                                component={'li'}
                                                key={index}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Typography
                                                    variant={'body1'}
                                                    key={index}
                                                    sx={{ mr: 1 }}
                                                >
                                                    {item}
                                                </Typography>
                                                {!uploadButton &&
                                                    access === 0 && (
                                                        <IconButton
                                                            sx={sxIconButtonColor()}
                                                            onClick={handleOpen.bind(
                                                                null,
                                                                id,
                                                                'subExperience',
                                                                index
                                                            )}
                                                        >
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    )}
                                            </Box>
                                        )
                                    )}
                            </Box>
                        </Box>
                    )
                )
            );
        } else {
            return (
                !!items &&
                items.map(
                    ({ id, degree, institution, period }: DocumentData) => (
                        <Box key={id} sx={sxItems()}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography
                                    variant={'h6'}
                                    component={'h3'}
                                    sx={{ mr: 1 }}
                                >
                                    {institution}
                                </Typography>
                                {isRenderDeleteButton(id, institution)}
                            </Box>
                            <Box component={'ul'}>
                                <Box component={'li'}>
                                    <Typography variant={'body1'}>
                                        {period}
                                    </Typography>
                                </Box>
                                <Box component={'li'}>
                                    <Typography variant={'body1'}>
                                        {degree}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    )
                )
            );
        }
    };

    return (
        <>
            {renderedItemsByValue(actionName)}

            <AlertDialogSlide
                open={open}
                handleClose={handleClose}
                actionName={actionName}
                name={name}
            />
            <Modal
                openModal={openModal}
                setOpenModal={setOpenModal}
                actionName={'subExperience'}
                subId={id}
            />
        </>
    );
};
