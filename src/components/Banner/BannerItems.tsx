import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRequiredDoc } from 'hooks/useRequiredDoc';
import { DocumentData } from 'firebase/firestore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectTheming } from 'redux/themingSlice';
import { sxIconButtonColor } from 'theme/sxIconButtonColor';
import { AlertDialogSlide } from 'components/Dialog';
import { AppDispatch } from 'redux/store';
import { firebaseDeleteDoc } from 'firebase/firestoreDatabase';

type TProps = { actionName: string };

const sxItems = () => {
    return {
        ml: 2,
        mb: 2,
    };
};

export const BannerItems = ({ actionName }: TProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [id, setId] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null);

    const dispatch = useDispatch<AppDispatch>();

    const items = useRequiredDoc(actionName.toLowerCase())?.[
        actionName.toLowerCase()
    ];
    const { uploadButton } = useSelector(selectTheming);

    const handleOpen = (id?: string | null, name?: string | null) => {
        if (id && name) {
            setId(id);
            setName(name);
        }

        setOpen(true);
    };

    const handleClose = (value: 'Cancel' | 'Ok') => {
        if (value === 'Ok') {
            firebaseDeleteDoc(actionName, items, id, null, dispatch);
        }
        setOpen(false);
    };
    const isRenderDeleteButton = (
        id: string | null,
        actionName: string | null
    ) => {
        if (!uploadButton) {
            return (
                <IconButton
                    sx={sxIconButtonColor()}
                    onClick={handleOpen.bind(null, id, actionName)}
                >
                    <DeleteIcon />
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
                    <Box sx={sxItems()}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant={'body1'}>{items}</Typography>
                            {isRenderDeleteButton(null, actionName)}
                        </Box>
                    </Box>
                )
            );
        } else if (actionName === 'experience') {
            return (
                !!items &&
                items.map(({ id, title, period }: DocumentData) => (
                    <Box sx={sxItems()} key={id}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography
                                variant={'h6'}
                                component={'h3'}
                                sx={{ mr: 1 }}
                            >
                                {title}
                            </Typography>
                            {isRenderDeleteButton(id, title)}
                        </Box>
                        <Typography variant={'body1'}>{period}</Typography>
                    </Box>
                ))
            );
        } else {
            return (
                !!items &&
                items.map(
                    ({ id, degree, institution, period }: DocumentData) => (
                        <Box key={id} sx={sxItems()}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant={'h6'} component={'h3'}>
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
            {
                <AlertDialogSlide
                    open={open}
                    handleClose={handleClose}
                    actionName={actionName}
                    name={name}
                />
            }
        </>
    );
};
