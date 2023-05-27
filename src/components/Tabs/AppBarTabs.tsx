import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import { useCustomLocation } from 'hooks/useCustomLocation';

export const AppBarTabs = () => {
    const pathname = useCustomLocation();
    const [value, setValue] = useState<string | (() => void)>(() => {
        if (pathname === '/') {
            return 'Home';
        } else {
            return pathname.charAt(1).toUpperCase() + pathname.slice(2);
        }
    });
    const pages: Readonly<string[]> = ['Home', 'Projects'];
    const navigate = useNavigate();

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        if (pathname === '/') {
            setValue('Home');
        } else {
            setValue(pathname.charAt(1).toUpperCase() + pathname.slice(2));
        }
    }, [pathname]);

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
