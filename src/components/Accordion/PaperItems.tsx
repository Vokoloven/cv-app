import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRequiredDoc } from 'hooks/useRequiredDoc';
import { useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { TIcons } from './icons';
import { capitalize } from 'helpers/capitalize';
import { sxIcon } from './sxIcon';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { AlertDialogSlide } from 'components/Dialog';
import { firebaseDeleteDoc } from 'firebase/firestoreDatabase';
import { selectAuth } from 'redux/authSlice';

type TProps = {
    actionName: string;
};

type TContacts = {
    name: TIcons;
    data: string;
    icon: JSX.Element;
};

type TItem = {
    id: string;
    [x: string]: string;
};

export const PaperItems = ({ actionName }: TProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [name, setName] = useState<string | null>(null);
    const [id, setId] = useState<string | null>(null);

    const isAvailable = useRef<boolean>(false);
    const items = useRequiredDoc(actionName)?.[actionName];
    const phone = useRequiredDoc('phone')?.phone;
    const email = useRequiredDoc('email')?.email;
    const github = useRequiredDoc('github')?.github;
    const linkedin = useRequiredDoc('linkedin')?.linkedin;
    const telegram = useRequiredDoc('telegram')?.telegram;

    const { access } = useSelector(selectAuth);

    const dispatch = useDispatch();

    const handleOpen = (id?: string | null, name?: string | null) => {
        if (id && name) {
            setId(id);
            setName(name);
        }

        access === 0 && setOpen(true);
    };

    const handleClose = (value: 'Cancel' | 'Ok') => {
        if (value === 'Ok') {
            firebaseDeleteDoc(actionName, items, id, null, dispatch);
        }
        setOpen(false);
    };

    const contacts: TContacts[] = [
        {
            name: 'phone',
            data: phone,
            icon: <PhoneIphoneIcon sx={sxIcon()} />,
        },
        {
            name: 'email',
            data: email,
            icon: <EmailIcon sx={sxIcon()} />,
        },
        {
            name: 'github',
            data: github,
            icon: <GitHubIcon sx={sxIcon()} />,
        },
        {
            name: 'linkedin',
            data: linkedin,
            icon: <LinkedInIcon sx={sxIcon()} />,
        },
        {
            name: 'telegram',
            data: telegram,
            icon: <TelegramIcon sx={sxIcon()} />,
        },
    ];

    ((contacts: TContacts[]) => {
        const isData = contacts.some(({ data }) => data !== undefined);
        if (isAvailable.current === false) {
            isData ? (isAvailable.current = true) : null;
            return;
        }
    })(contacts);

    const contactsItemsHandler = (name: TIcons, data: string) => {
        if (name === 'phone' && data) {
            return (
                <Box component={'a'} href={`tel:${data}`} sx={{ ml: 1 }}>
                    <Typography>{data}</Typography>
                </Box>
            );
        } else if (name === 'email' && data) {
            return (
                <Box component={'a'} href={`mailto:${data}`} sx={{ ml: 1 }}>
                    <Typography>{data}</Typography>
                </Box>
            );
        } else if (data) {
            return (
                <Box
                    component={'a'}
                    href={data}
                    sx={{ ml: 1 }}
                    target={'_blank'}
                    rel={'noreferrer noopener'}
                >
                    <Typography>{capitalize(name)}</Typography>
                </Box>
            );
        }
    };

    const renderedItemsByValue = (actionName: string) => {
        if (actionName === 'contacts') {
            return (
                isAvailable.current && (
                    <Box
                        component={'ul'}
                        sx={{
                            padding: 1,
                        }}
                    >
                        {contacts.map(
                            ({ icon, data, name }) =>
                                data && (
                                    <Box
                                        key={name}
                                        component={'li'}
                                        sx={{
                                            display: 'flex',
                                            '&:not(:last-child)': {
                                                mb: 1,
                                            },
                                        }}
                                    >
                                        {data && (
                                            <Box
                                                sx={{ display: 'flex' }}
                                                onClick={handleOpen.bind(
                                                    null,
                                                    name,
                                                    name
                                                )}
                                            >
                                                {icon}
                                            </Box>
                                        )}
                                        {contactsItemsHandler(name, data)}
                                    </Box>
                                )
                        )}
                    </Box>
                )
            );
        } else {
            return (
                items?.length > 0 && (
                    <Box
                        component={'ul'}
                        sx={{
                            padding: 1,
                        }}
                    >
                        {items.map((item: TItem) => (
                            <Box
                                component={'li'}
                                key={item?.id}
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <LabelImportantIcon
                                    sx={sxIcon()}
                                    onClick={handleOpen.bind(
                                        null,
                                        item?.id,
                                        item?.[actionName]
                                    )}
                                />
                                <Typography variant={'body1'} sx={{ ml: 1 }}>
                                    {item?.[actionName]}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                )
            );
        }
    };

    return (
        <>
            <Paper elevation={4} sx={{ mt: 1, mb: 3 }}>
                {renderedItemsByValue(actionName)}
            </Paper>
            <AlertDialogSlide
                open={open}
                handleClose={handleClose}
                actionName={actionName}
                name={name}
            />
        </>
    );
};
