import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const AppBarTabs = () => {
    const [value, setValue] = useState<string>('Home');
    const pages: Readonly<string[]> = ['Home', 'Projects'];
    const navigate = useNavigate();

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

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
