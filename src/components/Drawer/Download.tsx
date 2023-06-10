import { useSelector } from 'react-redux';
import { useRequiredDoc } from 'hooks/useRequiredDoc';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import IconButton from '@mui/material/IconButton';
import { sxTypographyColor } from 'theme/sxTypographyColor';
import { sxIconButtonColor } from 'theme/sxIconButtonColor';
import { Spinner } from 'components/Spinner/Spinner';
import { selectData } from 'redux/getDataSlice';

export const Download = () => {
    const { loading } = useSelector(selectData);
    const cvRef = useRequiredDoc('cv')?.cv;

    return (
        <Box
            sx={{
                mt: 2,
                pl: 2,
                pr: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Typography
                sx={sxTypographyColor({ fontWeight: 'bold' })}
                variant={'button'}
                component={'p'}
            >
                Download CV:
            </Typography>
            <Spinner loading={loading} />
            {cvRef && loading === 'succeeded' && (
                <Box
                    component={'a'}
                    href={cvRef}
                    target={'_blank'}
                    rel={'noreferrer noopener'}
                >
                    <IconButton
                        aria-label="download-button"
                        sx={sxIconButtonColor()}
                    >
                        <CloudDownloadIcon
                            sx={(theme) => ({
                                ...(theme.palette.mode === 'light'
                                    ? {
                                          color: 'primary.button.complementary',
                                      }
                                    : {
                                          color: 'primary.button.primary',
                                      }),
                            })}
                        />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
};
