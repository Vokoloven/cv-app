import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper'
// import IconButton from '@mui/material/IconButton'
// import PhotoCamera from '@mui/icons-material/PhotoCamera'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Photo = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                mt: 2,
            }}
        >
            <Card sx={{ maxWidth: 345 }} elevation={4}>
                <CardActionArea
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'primary.background.primary',
                        width: 300,
                        height: 300,
                    }}
                    component={'label'}
                >
                    <input hidden accept="image/*" multiple type="file" />
                    {/* <CardMedia
                        component="img"
                        height="300"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    /> */}
                    <CardContent>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography component={'p'} variant={'button'}>
                                Upload Photo
                            </Typography>
                            <CloudUploadIcon sx={{ width: 50, height: 50 }} />
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};
