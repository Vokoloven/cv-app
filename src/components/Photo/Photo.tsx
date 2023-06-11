import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useRequiredDoc } from 'hooks/useRequiredDoc';
import Box from '@mui/material/Box';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { firebaseSetDoc } from 'firebase/';
import { AppDispatch } from 'redux/store';
import { selectData } from 'redux/getDataSlice';
import { Spinner } from 'components/Spinner/Spinner';
import { AlertDialogSlide } from 'components/Dialog';
import { firebaseDeleteArrayDoc } from 'firebase/firestoreDatabase';

export const Photo = () => {
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const photo = useRequiredDoc('photo')?.photo;
    const path = useRequiredDoc('photo')?.path;

    const { loading } = useSelector(selectData);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: 'Cancel' | 'Ok') => {
        if (value === 'Ok') {
            firebaseDeleteArrayDoc('photo', null, path, dispatch);
        }

        setOpen(false);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target?.files?.[0];

        const storage = getStorage();
        const storageRef = ref(storage, `images/${file?.name}`);

        if (file) {
            uploadBytes(storageRef, file).then((snapshot) => {
                // console.log('Uploaded a blob or file!');
                // console.log(snapshot);
                snapshot &&
                    getDownloadURL(ref(storage, `images/${file?.name}`)).then(
                        (url) => {
                            firebaseSetDoc(
                                'photo',
                                { photo: url, path: `images/${file?.name}` },
                                dispatch
                            );
                        }
                    );
            });
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}
        >
            <Spinner loading={loading} />
            {loading === 'succeeded' && (
                <Card sx={{ maxWidth: 345 }} elevation={4}>
                    <CardActionArea
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                            color: 'primary.background.primary',
                            ...(photo ? null : { height: 300, width: 300 }),
                        }}
                        component={'label'}
                    >
                        {!photo && (
                            <input
                                hidden
                                accept="image/*"
                                multiple
                                type="file"
                                onChange={onChangeHandler}
                            />
                        )}
                        {photo && (
                            <CardMedia
                                component={'img'}
                                image={photo}
                                alt={'photo'}
                                onClick={handleOpen}
                            />
                        )}
                        {!photo && (
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography
                                        component={'p'}
                                        variant={'button'}
                                    >
                                        Upload Photo
                                    </Typography>
                                    <CloudUploadIcon
                                        sx={{ width: 50, height: 50 }}
                                    />
                                </Box>
                            </CardContent>
                        )}
                    </CardActionArea>
                </Card>
            )}
            <AlertDialogSlide
                open={open}
                handleClose={handleClose}
                actionName={'photo'}
                name={'photo'}
            />
        </Box>
    );
};
