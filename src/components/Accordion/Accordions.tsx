import * as React from 'react';
import Box from '@mui/material/Box';
import { CustomizedAccordion } from './Accordion';
import { AddContacts } from './AddSkills/Contacts/AddContacts';
import { AddTechSkills } from './AddSkills/TechSkills/AddTechSkills';
import { AddSoftSkills } from './AddSkills/SoftSkills/AddSoftSkills';
import { AddLanguages } from './AddSkills/AddLanguages/AddLanguages';

type TItem<T, U> = {
    value: T;
    title: U;
}[];

type TValue = 'contacts' | 'tech-skills' | 'soft-skills' | 'languages';

const items: TItem<
    TValue,
    'Contacts' | 'Tech Skills' | 'Soft Skills' | 'Languages'
> = [
    {
        value: 'contacts',
        title: 'Contacts',
    },
    {
        value: 'tech-skills',
        title: 'Tech Skills',
    },
    {
        value: 'soft-skills',
        title: 'Soft Skills',
    },
    {
        value: 'languages',
        title: 'Languages',
    },
];

const childrenHandler = (value: TValue) => {
    switch (value) {
        case 'contacts':
            return (
                <Box>
                    <AddContacts />
                </Box>
            );

            break;
        case 'tech-skills':
            return (
                <Box>
                    <AddTechSkills />
                </Box>
            );
            break;
        case 'soft-skills':
            return (
                <Box>
                    <AddSoftSkills />
                </Box>
            );
            break;
        case 'languages':
            return (
                <Box>
                    <AddLanguages />
                </Box>
            );
            break;

        default:
            return null;
    }
};

export function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>('contacts');

    const handleChange =
        (panel: string) =>
        (_event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <Box sx={{ mt: 2 }}>
            {items.map(({ value, title }) => (
                <CustomizedAccordion
                    key={value}
                    expanded={expanded}
                    handleChange={handleChange}
                    value={value}
                    title={title}
                >
                    {childrenHandler(value)}
                </CustomizedAccordion>
            ))}
        </Box>
    );
}
