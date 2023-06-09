import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { sxIconButtonColor } from 'theme/sxIconButtonColor';
import { icons, TIcons } from './icons';

type TClickHandler = {
    onClickHandler: (actionName: string) => void;
};

type TProps = {
    [x: string]: string | number;
};

const iconsHandler = (icons: TIcons, sx: TProps) => {
    switch (icons) {
        case 'location':
            return <LocationOnIcon sx={sx} />;
            break;
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

export const AddContacts = ({ onClickHandler }: TClickHandler) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {icons.map((icon) => (
                <IconButton
                    key={icon}
                    sx={sxIconButtonColor()}
                    onClick={() => onClickHandler(icon)}
                >
                    {iconsHandler(icon, { width: 30, height: 30 })}
                </IconButton>
            ))}
        </Box>
    );
};
