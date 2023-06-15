import Box from '@mui/material/Box';
import { BoxWrapper } from 'components/BoxWrapper';
import { ProjectsItems } from '.';
import { handleSide } from 'helpers/handleSide';
import {
    useWindowDimensions,
    getWindowDimension,
} from 'hooks/useWindowDimensions';

export const Projects = () => {
    const { width } = useWindowDimensions(getWindowDimension);
    const side = handleSide(width);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <BoxWrapper side={side}>
                <Box>
                    <ProjectsItems />
                </Box>
            </BoxWrapper>
        </Box>
    );
};
