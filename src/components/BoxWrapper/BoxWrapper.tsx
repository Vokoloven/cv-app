import Box from '@mui/material/Box';
import { TAppBar, TChildren } from 'types/globalTypes';
import { useCustomLocation } from 'hooks/useCustomLocation';

type TProps = TAppBar & TChildren;

export const BoxWrapper = ({ children, side, page }: TProps) => {
    const pathname = useCustomLocation();

    return (
        <Box
            sx={(theme) => ({
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',

                ...(side === 'left' && {
                    [theme.breakpoints.up('tablet')]: {
                        maxWidth: [theme.breakpoints.values.mobile],
                    },
                    [theme.breakpoints.up('mobile')]: {
                        maxWidth: [theme.breakpoints.values.mobileL],
                    },
                    [theme.breakpoints.down('tablet')]: {
                        ...(page !== 'sharedLayout' &&
                            pathname !== '/' && {
                                display: 'none',
                            }),
                    },
                }),
                ...(side === 'right' && {
                    ml: 3,
                    [theme.breakpoints.down('tablet')]: {
                        display: 'none',
                    },
                }),
            })}
        >
            {children}
        </Box>
    );
};
