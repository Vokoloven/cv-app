import Container from '@mui/material/Container';
import { Aside } from 'components/Aside/Aside';
import { ResponsiveAppBar } from 'components/AppBar/AppBar';
import { BoxWrapper } from 'components/BoxWrapper';
import { Photo } from 'components/Photo/Photo';
import { CustomizedAccordion } from 'components/Accordion';

export const Home = () => {
    return (
        <Container
            maxWidth={'desktop'}
            sx={(theme) => ({
                display: 'flex',
                [theme.breakpoints.down('laptop')]: {
                    justifyContent: 'center',
                },
                [theme.breakpoints.down('tablet')]: {
                    padding: 0,
                },
            })}
        >
            <BoxWrapper side={'left'}>
                <Aside />
                <Photo />
                <CustomizedAccordion />
            </BoxWrapper>
            <BoxWrapper side={'right'}>
                <ResponsiveAppBar side={'right'} />
            </BoxWrapper>
        </Container>
    );
};
