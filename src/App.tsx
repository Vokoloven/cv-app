import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Home } from 'pages/Home';
import { appGlobalStyles } from 'theme';
import CssBaseline from '@mui/material/CssBaseline';
import { selectTheming } from 'redux/themingSlice/selectTheming';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens } from 'theme/theme';

export const App = () => {
    const { colorMode } = useSelector(selectTheming);

    const theme = useMemo(
        () => createTheme(getDesignTokens(colorMode)),
        [colorMode]
    );

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {appGlobalStyles}
                <Home />
            </ThemeProvider>
        </>
    );
};
