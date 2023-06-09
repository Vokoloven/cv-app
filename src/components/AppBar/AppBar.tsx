import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { TopFrame } from 'components/TopFrame';
import { TAppBar } from 'types/globalTypes';
import { TemporaryDrawer } from 'components/Drawer';
import { AppBarTabs } from 'components/Tabs';
import {
    getWindowDimension,
    useWindowDimensions,
} from 'hooks/useWindowDimensions';
import { sxIconButtonColorSecondary } from 'theme/sxIconButtonColor';
import { NavLink } from 'react-router-dom';
import { sxNavLink } from 'theme/sxNavLink';
import { useCustomLocation } from 'hooks/useCustomLocation';

const pages: Readonly<string[]> = ['Home', 'Summary', 'Projects'];

export function ResponsiveAppBar({ side }: Pick<TAppBar, 'side'>) {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const { width } = useWindowDimensions(getWindowDimension);
    const pathname = useCustomLocation();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const appItems = (side: 'right' | 'left') => {
        if (side === 'right' && width > 767) {
            return (
                <>
                    <AppBarTabs />
                    <TemporaryDrawer />
                </>
            );
        }
        if (side === 'left' && width < 768) {
            return <TemporaryDrawer />;
        }
    };

    return (
        <>
            <TopFrame />
            <AppBar
                position="static"
                sx={(theme) => ({
                    mb: 2,
                    ...(theme.palette.mode === 'light'
                        ? {
                              bgcolor: 'primary.background.primary',
                          }
                        : { bgcolor: 'primary.background.secondary' }),
                })}
            >
                <Container>
                    <Toolbar disableGutters>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { mobile: 'flex', tablet: 'none' },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                                sx={sxIconButtonColorSecondary()}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {
                                        mobile: 'block',
                                        tablet: 'none',
                                    },
                                }}
                            >
                                {pages.map((page) => (
                                    <NavLink
                                        key={page}
                                        to={
                                            page === 'Home'
                                                ? '/'
                                                : page.toLowerCase()
                                        }
                                    >
                                        <MenuItem
                                            onClick={handleCloseNavMenu}
                                            sx={sxNavLink(pathname, page)}
                                        >
                                            <Typography
                                                textAlign="center"
                                                sx={{
                                                    color: 'primary.typography.text.complementary',
                                                }}
                                            >
                                                {page}
                                            </Typography>
                                        </MenuItem>
                                    </NavLink>
                                ))}
                            </Menu>
                        </Box>
                        {appItems(side)}
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
