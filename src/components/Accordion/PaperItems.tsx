import { useRequiredDoc } from 'hooks/useRequiredDoc';
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
    const { phone } = useRequiredDoc('phone');
    const { email } = useRequiredDoc('email');
    const { github } = useRequiredDoc('github');
    const { linkedin } = useRequiredDoc('linkedin');
    const { telegram } = useRequiredDoc('telegram');

    const items = useRequiredDoc(actionName)?.[actionName];

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

    const contactsItemsHandler = (name: TIcons, data: string) => {
        if (name === 'phone') {
            return (
                <Box component={'a'} href={`tel:${data}`} sx={{ ml: 1 }}>
                    <Typography>{data}</Typography>
                </Box>
            );
        } else if (name === 'email') {
            return (
                <Box component={'a'} href={`mailto:${data}`} sx={{ ml: 1 }}>
                    <Typography>{data}</Typography>
                </Box>
            );
        } else {
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
                <Box component={'ul'} sx={{ ml: 1, py: 2 }}>
                    {contacts.map(({ icon, data, name }) => (
                        <Box
                            key={name}
                            component={'li'}
                            sx={{
                                ml: 1,
                                display: 'flex',
                                '&:not(:last-child)': {
                                    mb: 1,
                                },
                            }}
                        >
                            {data && icon}
                            {contactsItemsHandler(name, data)}
                        </Box>
                    ))}
                </Box>
            );
        } else {
            return (
                <Box component={'ul'} sx={{ ml: 1, py: 2 }}>
                    {!!items &&
                        items.map((item: TItem) => (
                            <Box
                                component={'li'}
                                key={item?.id}
                                sx={{
                                    ml: 1,
                                    display: 'flex',
                                    '&:not(:last-child)': {
                                        mb: 1,
                                    },
                                }}
                            >
                                <LabelImportantIcon sx={sxIcon()} />
                                <Typography variant={'body1'} sx={{ ml: 1 }}>
                                    {item?.[actionName]}
                                </Typography>
                            </Box>
                        ))}
                </Box>
            );
        }
    };

    return (
        <Paper elevation={4} sx={{ mt: 1, mb: 2 }}>
            {renderedItemsByValue(actionName)}
        </Paper>
    );
};
