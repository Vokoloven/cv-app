import CircularProgress from '@mui/material/CircularProgress';
import { TSpinner } from 'types/globalTypes';

export const Spinner = ({ loading }: TSpinner) => {
    const spinner = (loading: 'idle' | 'pending' | 'succeeded' | 'failed') => {
        if (loading === 'pending') {
            return (
                <CircularProgress sx={{ color: 'primary.button.secondary' }} />
            );
        } else {
            return null;
        }
    };

    return spinner(loading);
};
