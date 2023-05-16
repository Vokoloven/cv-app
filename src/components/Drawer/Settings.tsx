import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { sxIconButtonColor } from 'theme/sxIconButtonColor';
import { sxTypographyColor } from 'theme/sxTypographyColor';

type Anchor = 'right';
type TToggleDrawer = {
    toggleDrawer: (
        anchor: Anchor,
        open: boolean
    ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
};

export const Settings = ({ toggleDrawer }: TToggleDrawer) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 2,
            }}
        >
            <Typography sx={sxTypographyColor({ fontWeight: 'bold' })}>
                Settings
            </Typography>
            <IconButton
                aria-label="close-button"
                sx={sxIconButtonColor()}
                onClick={toggleDrawer('right', false)}
            >
                <CloseIcon />
            </IconButton>
        </Box>
    );
};
