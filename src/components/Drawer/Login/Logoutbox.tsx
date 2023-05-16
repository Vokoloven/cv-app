import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import { User } from 'firebase/auth';
import { sxIconButtonColor } from 'theme/sxIconButtonColor';
import { sxTypographyColor } from 'theme/sxTypographyColor';
import { Spinner } from 'components/Spinner/Spinner';

type TOnclickHandler = {
    onClickHandler: (value: 'login' | 'logout') => void;
    user: User | null;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

export const LogoutBox = ({
    onClickHandler,
    user,
    loading,
}: TOnclickHandler) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={sxTypographyColor({
                        fontWeight: 'bold',
                        mr: 1,
                    })}
                    variant={'button'}
                    component={'p'}
                >
                    {user?.displayName}
                </Typography>
                <Avatar src={user?.photoURL as string} alt={'user-photo'} />
            </Box>
            <Spinner loading={loading} />
            {loading !== 'pending' && (
                <IconButton
                    aria-label="logout-button"
                    sx={sxIconButtonColor()}
                    onClick={() => onClickHandler('logout')}
                >
                    <LogoutIcon />
                </IconButton>
            )}
        </>
    );
};
