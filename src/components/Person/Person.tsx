import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRequiredDoc } from 'hooks/useRequiredDoc';
import { Spinner } from 'components/Spinner/Spinner';
import { useSelector } from 'react-redux';
import { selectData } from 'redux/getDataSlice';

const sxItems = () => {
    return {
        ml: 2,
        mb: 2,
    };
};

export const Person = () => {
    const name = useRequiredDoc('name');

    const { loading } = useSelector(selectData);

    return (
        <Box>
            <Spinner loading={loading} />
            {loading === 'succeeded' && (
                <Box>
                    <Typography variant={'h2'} sx={sxItems()}>
                        {name?.firstName}
                    </Typography>
                    <Typography variant={'h2'} sx={sxItems()}>
                        {name?.secondName}
                    </Typography>
                    <Typography variant={'h5'} component={'h1'} sx={sxItems()}>
                        {name?.position}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};
