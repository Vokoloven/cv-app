import { useRequiredDoc } from 'hooks/useRequiredDoc';
import { DocumentData } from 'firebase/firestore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type TProps = { name: string };

const sxItems = () => {
    return {
        ml: 2,
        mb: 2,
    };
};

export const BannerItems = ({ name }: TProps) => {
    const item = useRequiredDoc(name)?.[name];

    const renderedItemsByValue = (name: string) => {
        if (name === 'Summary') {
            return (
                <Box sx={sxItems()}>
                    <Typography variant={'body1'}>{item}</Typography>
                </Box>
            );
        } else if (name === 'Experience') {
            return (
                !!item &&
                item.map(({ id, title, period }: DocumentData) => (
                    <Box sx={sxItems()} key={id}>
                        <Typography variant={'h6'} component={'h3'}>
                            {title}
                        </Typography>
                        <Typography variant={'body1'}>{period}</Typography>
                    </Box>
                ))
            );
        } else {
            return (
                !!item &&
                item.map(
                    ({ id, degree, institution, period }: DocumentData) => (
                        <Box key={id} sx={sxItems()}>
                            <Typography variant={'h6'} component={'h3'}>
                                {institution}
                            </Typography>
                            <Box component={'ul'}>
                                <Box component={'li'}>
                                    <Typography variant={'body1'}>
                                        {period}
                                    </Typography>
                                </Box>
                                <Box component={'li'}>
                                    <Typography variant={'body1'}>
                                        {degree}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    )
                )
            );
        }
    };

    return renderedItemsByValue(name);
};
