import * as React from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardActionArea } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { PositionedPopper } from 'components/Popper/Popper';
import { sxIconButtonColor } from 'theme/sxIconButtonColor';
import { selectTheming } from 'redux/themingSlice';
import { selectAuth } from 'redux/authSlice';

type TItem = {
    projectName: string;
    tools: string;
    link: string;
    description: string;
    id: string;
    repo: string;
    photo: string;
    path: string;
};

type TProps = {
    item: TItem;
};

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const CustomCard = ({ item }: TProps) => {
    const [expanded, setExpanded] = React.useState(false);
    const { uploadButton } = useSelector(selectTheming);
    const { access } = useSelector(selectAuth);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card elevation={4} sx={{ maxWidth: 345 }}>
            <CardHeader
                title={item?.projectName}
                subheader={item?.tools}
                sx={{ flexWrap: 'wrap' }}
            />
            <CardActionArea sx={{ color: 'primary.background.primary' }}>
                <Box
                    component={'a'}
                    href={item?.link}
                    target={'_blank'}
                    rel={'noreferrer noopener'}
                >
                    <CardMedia
                        component="img"
                        image={item?.photo}
                        alt={item?.projectName}
                        sx={{ height: '170px' }}
                    />
                </Box>
            </CardActionArea>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {item?.description?.length > 100
                        ? `${item?.description.slice(0, 100)}...`
                        : item?.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Box
                    component={'a'}
                    href={item?.repo}
                    target={'_blank'}
                    rel={'noreferrer noopener'}
                >
                    <IconButton aria-label="github" sx={sxIconButtonColor()}>
                        <GitHubIcon />
                    </IconButton>
                </Box>
                {!uploadButton && access === 0 && (
                    <PositionedPopper item={item} />
                )}
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Description:</Typography>
                    <Typography paragraph>{item?.description}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};
