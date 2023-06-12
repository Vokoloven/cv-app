import { useRequiredDoc } from 'hooks/useRequiredDoc';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type TItem = {
    projectName: string;
    tools: string;
    link: string;
    description: string;
    id: string;
    repo: string;
};

export const ProjectsItems = () => {
    const items = useRequiredDoc('projects')?.projects;

    return (
        <Box>
            {items?.length > 0 &&
                items.map(
                    ({
                        tools,
                        link,
                        description,
                        id,
                        repo,
                        projectName,
                    }: TItem) => (
                        <Box key={id}>
                            <Box
                                component={'a'}
                                href={link}
                                target={'_blank'}
                                rel={'noreferrer noopener'}
                                sx={{ mr: 1 }}
                            >
                                {projectName}
                            </Box>
                            <Box
                                component={'a'}
                                href={repo}
                                target={'_blank'}
                                rel={'noreferrer noopener'}
                            >
                                GitHub
                            </Box>
                            <Typography variant={'body1'}>({tools})</Typography>
                        </Box>
                    )
                )}
        </Box>
    );
};
