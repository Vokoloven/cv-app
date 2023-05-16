import { useDispatch, useSelector } from 'react-redux';
import {
    loginUserByGoogle,
    logoutUserByGoogle,
} from 'redux/service/authUserByGoogle';
import Box from '@mui/material/Box';
import { AppDispatch } from 'redux/store';
import { selectAuth } from 'redux/authSlice/selectAuth';
import { LoginBox } from './LoginBox';
import { LogoutBox } from './Logoutbox';

export const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { authorized, user, loading } = useSelector(selectAuth);

    const onClickHandler = (value: 'login' | 'logout') => {
        if (value === 'login') {
            dispatch(loginUserByGoogle());
        } else if (value === 'logout') {
            dispatch(logoutUserByGoogle());
        }
    };

    const authItems = (authorized: boolean) => {
        if (!authorized) {
            return (
                <LoginBox onClickHandler={onClickHandler} loading={loading} />
            );
        } else {
            return (
                <LogoutBox
                    onClickHandler={onClickHandler}
                    user={user}
                    loading={loading}
                />
            );
        }
    };

    return (
        <Box
            sx={{
                mt: 2,
                pl: 2,
                pr: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            {authItems(authorized)}
        </Box>
    );
};
