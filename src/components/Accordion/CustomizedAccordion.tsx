import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { CustomizedAccordionItem } from './CustomizedAccordionItem';
import { AddContacts } from './AddContacts';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/authSlice';
import { AddButton } from 'components/Buttons';
import { TActionName, items, TTitle } from './items';

const childrenHandler = (
    actionName: TActionName,
    ariaLabel: string,
    title: TTitle
) => {
    if (actionName === 'contacts') {
        return <AddContacts />;
    } else {
        return (
            <AddButton ariaLabel={ariaLabel} action={actionName}>
                {`Add ${title}`}
            </AddButton>
        );
    }
};

export function CustomizedAccordion() {
    const [expanded, setExpanded] = useState<string | false>(false);
    const { access } = useSelector(selectAuth);

    useEffect(() => {
        if (access !== 0) {
            setExpanded(false);
        }
    }, [access]);

    const handleChange =
        (panel: string) =>
        (_event: React.SyntheticEvent, newExpanded: boolean) => {
            if (access !== 0) {
                return;
            }

            setExpanded(newExpanded ? panel : false);
        };

    return (
        <Box sx={{ mt: 2 }}>
            {items.map(({ actionName, title, ariaLabel }) => (
                <CustomizedAccordionItem
                    key={actionName}
                    expanded={expanded}
                    handleChange={handleChange}
                    value={actionName}
                    title={title}
                >
                    {childrenHandler(actionName, ariaLabel, title)}
                </CustomizedAccordionItem>
            ))}
        </Box>
    );
}
