import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type TItems = {
    firstName: string;
    secondName: string;
    position: string;
};

const typographyItems: TItems = {
    firstName: 'Ruslan',
    secondName: 'Volovenko',
    position: 'Junior Frontend Developer',
};

const sxItems = () => {
    return {
        ml: 2,
        mb: 2,
    };
};

export const Person = () => {
    return (
        <Box>
            <Typography variant={'h2'} sx={sxItems()}>
                {typographyItems.secondName}
            </Typography>
            <Typography variant={'h2'} sx={sxItems()}>
                {typographyItems.firstName}
            </Typography>
            <Typography variant={'h5'} component={'h1'} sx={sxItems()}>
                {typographyItems.position}
            </Typography>
        </Box>
    );
};
