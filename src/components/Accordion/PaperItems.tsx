import { useRequiredDoc } from 'hooks/useRequiredDoc';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { TIcons } from './icons';
import { capitalize } from 'helpers/capitalize';

type TProps = {
    actionName: string;
};

type TContacts = {
    name: TIcons;
    data: string;
    icon: JSX.Element;
};

export const PaperItems = ({ actionName }: TProps) => {
    const { phone } = useRequiredDoc('phone');
    const { email } = useRequiredDoc('email');
    const { github } = useRequiredDoc('github');
    const { linkedin } = useRequiredDoc('linkedin');
    const { telegram } = useRequiredDoc('telegram');

    const contacts: TContacts[] = [
        {
            name: 'phone',
            data: phone,
            icon: <PhoneIphoneIcon />,
        },
        {
            name: 'email',
            data: email,
            icon: <EmailIcon />,
        },
        {
            name: 'github',
            data: github,
            icon: <GitHubIcon />,
        },
        {
            name: 'linkedin',
            data: linkedin,
            icon: <LinkedInIcon />,
        },
        {
            name: 'telegram',
            data: telegram,
            icon: <TelegramIcon />,
        },
    ];

    // const namesGuard = (name: string) => {
    //     switch (name) {
    //         case 'techSkills':
    //             return 'techSkills';
    //             break;
    //         case 'softSkills':
    //             return 'softSkills';
    //             break;
    //         case 'languages':
    //             return 'languages';
    //             break;

    //         default:
    //             return;
    //             break;
    //     }
    // };

    return (
        <Box>
            {actionName === 'contacts' && (
                <Box component={'ul'} sx={{ ml: 1 }}>
                    {contacts.map(({ icon, data, name }) => (
                        <Box
                            component={'li'}
                            sx={{
                                ml: 1,
                                display: 'flex',
                                '&:not(:last-child)': {
                                    mb: 1,
                                },
                            }}
                        >
                            {icon}
                            <Box component={'a'} href={data} sx={{ ml: 1 }}>
                                <Typography>{capitalize(name)}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};
