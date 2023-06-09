import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { appGlobalStyles } from 'theme';
import CssBaseline from '@mui/material/CssBaseline';
import { selectTheming } from 'redux/themingSlice/selectTheming';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens } from 'theme/theme';
import { Home } from 'pages/Home';
import { Projects } from 'pages/Projects';
import { SharedLayout } from 'pages/SharedLayout';
import Container from '@mui/material/Container';
import { getFirestoreDatabase } from 'redux/service';
import { AppDispatch } from 'redux/store';
import { Summary } from 'pages/Summary';
import {
    useWindowDimensions,
    getWindowDimension,
} from 'hooks/useWindowDimensions';

export const App = () => {
    const { colorMode } = useSelector(selectTheming);
    const dispatch = useDispatch<AppDispatch>();
    const isFirstRender = useRef(true);
    const { width } = useWindowDimensions(getWindowDimension);

    useEffect(() => {
        if (isFirstRender.current) {
            dispatch(getFirestoreDatabase('cvAppData'));
            isFirstRender.current = false;
            return;
        }
    }, [dispatch]);

    const theme = useMemo(
        () => createTheme(getDesignTokens(colorMode)),
        [colorMode]
    );

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {appGlobalStyles}
                <Container
                    maxWidth={'desktop'}
                    sx={(theme) => ({
                        display: 'flex',
                        flexDirection: 'column',
                        [theme.breakpoints.down('laptop')]: {
                            justifyContent: 'center',
                        },
                        [theme.breakpoints.down('tablet')]: {
                            padding: 0,
                        },
                    })}
                >
                    <Routes>
                        <Route path={'/'} element={<SharedLayout />}>
                            <Route index element={<Home />} />
                            <Route path={'projects'} element={<Projects />} />
                            {width < 768 && (
                                <Route path={'summary'} element={<Summary />} />
                            )}
                            <Route path={'*'} element={<Home />} />
                        </Route>
                    </Routes>
                </Container>
            </ThemeProvider>
        </>
    );
};
