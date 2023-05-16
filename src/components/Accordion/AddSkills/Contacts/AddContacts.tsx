import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { sxIconButtonColor } from 'theme/sxIconButtonColor';

type TIcons = 'phone' | 'email' | 'github' | 'linkedin' | 'telegram';

type TProps = {
    [x: string]: string | number;
};

const icons: Readonly<TIcons[]> = [
    'phone',
    'email',
    'github',
    'linkedin',
    'telegram',
];

const iconsHandler = (icons: TIcons, sx: TProps) => {
    switch (icons) {
        case 'phone':
            return <PhoneIphoneIcon sx={sx} />;
            break;
        case 'email':
            return <EmailIcon sx={sx} />;
            break;
        case 'github':
            return <GitHubIcon sx={sx} />;
            break;
        case 'linkedin':
            return <LinkedInIcon sx={sx} />;
            break;
        case 'telegram':
            return <TelegramIcon sx={sx} />;
            break;
        default:
            return null;
    }
};

export const AddContacts = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {icons.map((icon) => (
                <IconButton key={icon} sx={sxIconButtonColor()}>
                    {iconsHandler(icon, { width: 30, height: 30 })}
                </IconButton>
            ))}
        </Box>
    );
};
