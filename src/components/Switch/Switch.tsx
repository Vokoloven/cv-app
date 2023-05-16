import Switch from '@mui/material/Switch'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheming } from 'redux/themingSlice/selectTheming'
import { colorModeSwitcher } from 'redux/themingSlice'
import Box from '@mui/material/Box'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Brightness4Icon from '@mui/icons-material/Brightness4'

export default function ColorSwitch() {
    const { colorMode } = useSelector(selectTheming)
    const dispatch = useDispatch()

    const onClickHandler = () => {
        colorMode === 'light'
            ? dispatch(colorModeSwitcher('dark'))
            : dispatch(colorModeSwitcher('light'))
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {colorMode === 'light' ? (
                <Brightness7Icon
                    sx={{ color: 'primary.button.complementary' }}
                />
            ) : (
                <Brightness4Icon sx={{ color: 'primary.button.primary' }} />
            )}
            <Switch
                checked={colorMode === 'light' ? false : true}
                onClick={onClickHandler}
                sx={(theme) => ({
                    '& .MuiSwitch-switchBase': {
                        color: `${theme.palette.primary.button.complementary}`,
                        '&:hover': {
                            backgroundColor: `${theme.palette.primary.button.analogous.complementary}`,
                        },
                    },
                    '& .MuiSwitch-switchBase + .MuiSwitch-track': {
                        backgroundColor: `${theme.palette.primary.button.complementary}`,
                    },
                    '& .MuiSwitch-switchBase.Mui-checked': {
                        color: `${theme.palette.primary.button.primary}`,
                        '&:hover': {
                            backgroundColor: `${theme.palette.primary.button.analogous.primary}`,
                        },
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: `${theme.palette.primary.button.primary}`,
                    },
                })}
            />
        </Box>
    )
}
