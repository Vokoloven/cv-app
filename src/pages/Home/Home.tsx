import Box from '@mui/material/Box';
import { BoxWrapper } from 'components/BoxWrapper';
import { Photo } from 'components/Photo/Photo';
import { CustomizedAccordion } from 'components/Accordion';

export const Home = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <BoxWrapper side={'left'}>
                <Photo />
                <CustomizedAccordion />
            </BoxWrapper>
            <BoxWrapper side={'right'}>
                <Box sx={{ mt: 2 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam eum soluta est illo ipsa esse. Quam, qui laudantium
                    amet nobis ipsam, est tempore, necessitatibus deserunt quia
                    rerum reprehenderit suscipit numquam. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Unde saepe non
                    voluptatibus, excepturi reprehenderit culpa vel laborum
                    inventore? Doloremque inventore eos neque nam eveniet
                    aliquid tempore maxime doloribus alias amet.
                </Box>
            </BoxWrapper>
        </Box>
    );
};
