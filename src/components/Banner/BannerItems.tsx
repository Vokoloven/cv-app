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
    const typeGuard = (name: string) => {
        switch (name) {
            case 'Summary':
                return 'Summary';
                break;
            case 'Experience':
                return 'Experience';
                break;

            case 'Education':
                return 'Education';
                break;

            default:
                return;
                break;
        }
    };

    const summary = useRequiredDoc(`${typeGuard(name)}`)?.description;
    const experience = useRequiredDoc(`${typeGuard(name)}`)?.Experience;
    const education = useRequiredDoc(`${typeGuard(name)}`)?.Education;

    return (
        <>
            <Box sx={sxItems()}>
                {!!summary && (
                    <Typography variant={'body1'}>{summary}</Typography>
                )}
            </Box>
            {!!experience &&
                experience.map(({ id, title, period }: DocumentData) => (
                    <Box sx={sxItems()} component={'ul'} key={id}>
                        <Box component={'li'}>
                            <Typography variant={'h6'}>{title}</Typography>
                        </Box>
                        <Box component={'li'}>
                            <Typography variant={'body1'}>{period}</Typography>
                        </Box>
                    </Box>
                ))}
            {!!education &&
                education.map(
                    ({ id, degree, institution, period }: DocumentData) => (
                        <Box sx={sxItems()} component={'ul'} key={id}>
                            <Box component={'li'}>
                                <Typography variant={'h6'}>
                                    {institution}
                                </Typography>
                            </Box>
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
                    )
                )}
        </>
    );
};
