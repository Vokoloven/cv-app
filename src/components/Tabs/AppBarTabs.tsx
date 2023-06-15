import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import { useCustomLocation } from 'hooks/useCustomLocation';

const pages: Readonly<string[]> = ['Home', 'Projects'];

export const AppBarTabs = () => {
    const pathname = useCustomLocation();
    const isValidPage = pages.some(
        (page) => page === pathname.charAt(1).toUpperCase() + pathname.slice(2)
    );

    const [value, setValue] = useState<string | (() => void)>(() => {
        if (pathname === '/') {
            return 'Home';
        } else {
            return isValidPage
                ? pathname.charAt(1).toUpperCase() + pathname.slice(2)
                : 'Home';
        }
    });
    const navigate = useNavigate();

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        if (pathname === '/') {
            setValue('Home');
        } else {
            isValidPage
                ? setValue(pathname.charAt(1).toUpperCase() + pathname.slice(2))
                : setValue('Home');
        }
    }, [isValidPage, pathname]);

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="tabs-navigation"
                TabIndicatorProps={{
                    sx: {
                        backgroundColor: 'primary.button.primary',
                    },
                }}
            >
                {pages.map((item) => (
                    <Tab
                        onClick={() =>
                            navigate(item === 'Home' ? '/' : item.toLowerCase())
                        }
                        key={item}
                        value={item}
                        label={item}
                        sx={(theme) => ({
                            color: `${theme.palette.primary.typography.text.primary}`,
                            '&.Mui-selected': {
                                color: `${theme.palette.primary.button.primary}`,
                            },
                        })}
                    />
                ))}
            </Tabs>
        </Box>
    );
};
