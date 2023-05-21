import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { appGlobalStyles } from 'theme';
import CssBaseline from '@mui/material/CssBaseline';
import { selectTheming } from 'redux/themingSlice/selectTheming';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens } from 'theme/theme';
import { Home } from 'pages/Home';
import { Projects } from 'pages/Projects';
import { SharedLayout } from 'pages/SharedLayout';

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
                <Routes>
                    <Route path={'/'} element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        <Route path={'projects'} element={<Projects />} />
                        <Route path={'*'} element={<Home />} />
                    </Route>
                </Routes>
            </ThemeProvider>
        </>
    );
};
