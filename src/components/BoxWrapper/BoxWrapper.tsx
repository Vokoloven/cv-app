import Box from '@mui/material/Box';
import { TAppBar, TChildren } from 'types/globalTypes';
import { useLocation } from 'react-router-dom';

type TProps = TAppBar & TChildren;

export const BoxWrapper = ({ children, side, page }: TProps) => {
    const { pathname } = useLocation();
    const clearPathName = pathname.replace(/[/]/g, '');
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
                    [theme.breakpoints.down('tablet')]: {
                        ...(page !== 'sharedLayout' &&
                            !!clearPathName && {
                                display: 'none',
                            }),
                    },
                }),
            })}
        >
            {children}
        </Box>
    );
};
