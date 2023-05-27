import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { sxTypographyColor } from 'theme/sxTypographyColor';
import { sxToggleButtonColor } from 'theme/sxToggleButtonColor';
import { selectTheming } from 'redux/themingSlice/selectTheming';
import { selectAuth } from 'redux/authSlice/selectAuth';
import { hideButton } from 'redux/themingSlice';

export const CustomToggleButton = () => {
    const { uploadButton } = useSelector(selectTheming);
    const { authorized } = useSelector(selectAuth);
    const [alignment, setAlignment] = useState<'hidden' | null>(uploadButton);
    const dispatch = useDispatch();

    const handleChange = (
        _event: React.MouseEvent<HTMLElement>,
        newAlignment: 'hidden' | null
    ) => {
        setAlignment(newAlignment);
    };
    useEffect(() => {
        dispatch(hideButton(alignment));
    }, [alignment, dispatch]);

    const authItems = (authorized: boolean) => {
        if (authorized) {
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
                        Upload button:
                    </Typography>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton
                            value="hidden"
                            sx={sxToggleButtonColor()}
                            selected={alignment ? true : false}
                        >
                            {uploadButton ? 'Hidden' : 'Shown'}
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            );
        } else {
            return null;
        }
    };

    return authItems(authorized);
};
