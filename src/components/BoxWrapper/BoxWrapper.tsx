import Box from '@mui/material/Box';
import { TAppBar, TChildren } from 'types/globalTypes';

type TProps = TAppBar & TChildren;

export const BoxWrapper = ({ children, side }: TProps) => {
    return (
        <Box
            sx={(theme) => ({
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                flexGrow: 1,
                ...(side === 'right' && {
                    ml: 3,
                    [theme.breakpoints.down('tablet')]: {
                        display: 'none',
                    },
                }),
                ...(side === 'left' && {
                    [theme.breakpoints.up('tablet')]: {
                        maxWidth: [theme.breakpoints.values.mobile],
                    },
                    [theme.breakpoints.up('mobile')]: {
                        maxWidth: [theme.breakpoints.values.mobileL],
                    },
                }),
            })}
        >
            {children}
        </Box>
    );
};
