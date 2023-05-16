import Box from '@mui/material/Box'

export const TopFrame = () => {
    return (
        <Box
            sx={(theme) => ({
                pt: 3,
                ...(theme.palette.mode === 'light'
                    ? {
                          bgcolor: 'primary.background.secondary',
                      }
                    : { bgcolor: 'secondary' }),
            })}
        />
    )
}
