import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';
import { sxIconButtonColor } from 'theme/sxIconButtonColor';
import { sxTypographyColor } from 'theme/sxTypographyColor';
import { Spinner } from 'components/Spinner/Spinner';

type TOnclickHandler = {
    onClickHandler: (value: 'login' | 'logout') => void;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

export const LoginBox = ({ onClickHandler, loading }: TOnclickHandler) => {
    return (
        <>
            <Typography
                sx={sxTypographyColor({ fontWeight: 'bold' })}
                variant={'button'}
                component={'p'}
            >
                Login with:
            </Typography>
            <Spinner loading={loading} />
            {loading !== 'pending' && (
                <IconButton
                    aria-label="login-button"
                    sx={sxIconButtonColor()}
                    onClick={() => onClickHandler('login')}
                >
                    <GoogleIcon />
                </IconButton>
            )}
        </>
    );
};
