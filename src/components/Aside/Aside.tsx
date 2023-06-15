import { ResponsiveAppBar } from 'components/AppBar/AppBar';
import { Photo } from 'components/Photo/Photo';
import { CustomizedAccordion } from 'components/Accordion';
import { Person } from 'components/Person';
import Box from '@mui/material/Box';
import { useCustomLocation } from 'hooks/useCustomLocation';

export const Aside = () => {
    const pathname = useCustomLocation();

    return (
        <>
            <ResponsiveAppBar side={'left'} />
            <Box
                sx={(theme) => ({
                    ...(pathname !== '/' && {
                        [theme.breakpoints.down('tablet')]: {
                            display: 'none',
                        },
                    }),
                })}
            >
                <Person side={'left'} />
                <Photo />
                <CustomizedAccordion />
            </Box>
        </>
    );
};
