import { TColorMode } from 'types/themeTypes';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true;
        mobileL: true;
        tablet: true;
        laptop: true;
        desktop: true;
    }
    interface Palette {
        primary: PaletteColor<string>;
    }

    type PaletteColor<T> = {
        [x: string]: T | { [x: string]: T };
    };
}

export const getDesignTokens = (mode: TColorMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  // Light Theme
                  primary: {
                      main: '#fff',
                      background: {
                          primary: '#e12c3e',
                          secondary: '#c5142a',
                          complementary: '#2ce1cf',
                          triadic: {
                              primary: '#fff',
                              complementary: '#121212',
                          },
                          linearGradient:
                              'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))',
                      },
                      typography: {
                          text: {
                              primary: '#fff',
                              secondary: '#121212',
                              complementary: '#e12c3e',
                          },
                      },
                      divider: {},
                      button: {
                          primary: '#2ce1cf',
                          complementary: '#e12c3e',
                          secondary: '#2ce1cf',
                          analogous: {
                              primary: 'rgba(44, 225, 207, 0.13)',
                              secondary: 'rgba(255, 255, 255, 0.13)',
                              complementary: 'rgba(225, 44, 62, 0.13)',
                          },
                          triadic: {
                              primary: '#fff',
                              complementary: '#121212',
                          },
                      },
                  },
              }
            : {
                  //Dark Theme
                  primary: {
                      main: '#121212',
                      background: {
                          primary: '#f59da3',
                          secondary: '#121212',
                          complementary: '#d7f8f5',
                          triadic: {
                              primary: '#fff',
                              complementary: '#121212',
                          },
                          linearGradient:
                              'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))',
                      },
                      typography: {
                          text: {
                              primary: '#fff',
                              secondary: '#121212',
                              complementary: '#f59da3',
                          },
                      },
                      divider: {},
                      button: {
                          primary: '#f59da3',
                          secondary: '#2ce1cf',
                          complementary: '#fff',
                          analogous: {
                              primary: 'rgba(245, 157, 163, 0.13)',
                              secondary: 'rgba(255, 255, 255, 0.13)',
                              complementary: 'rgba(44, 225, 207, 0.13)',
                          },
                          triadic: {
                              primary: '#fff',
                              complementary: '#121212',
                          },
                      },
                  },
              }),
    },
    breakpoints: {
        values: {
            mobile: 320,
            mobileL: 425,
            tablet: 768,
            laptop: 1024,
            desktop: 1440,
        },
    },
});
