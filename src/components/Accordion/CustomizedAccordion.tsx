import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { CustomizedAccordionItem } from './CustomizedAccordionItem';
import { AddContacts } from './AddContacts';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/authSlice';
import { AddButton } from 'components/Buttons';
import { TActionName, items, TTitle } from './items';
import { NestedModal } from 'components/Modal/NestedModal';

const childrenHandler = (
    actionName: TActionName,
    ariaLabel: string,
    title: TTitle,
    onClickHandler: (actionName: string) => void
) => {
    if (actionName === 'contacts') {
        return <AddContacts onClickHandler={onClickHandler} />;
    } else {
        return (
            <AddButton
                ariaLabel={ariaLabel}
                actionName={actionName}
                onClickHandler={onClickHandler}
            >
                {`Add ${title}`}
            </AddButton>
        );
    }
};

export function CustomizedAccordion() {
    const [actionName, setActionName] = useState<string | null>(null);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [expanded, setExpanded] = useState<string | false>(false);
    const { access } = useSelector(selectAuth);

    const onClickHandler = (actionName: string) => {
        setOpenModal(true);
        setActionName(actionName);
    };

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
            <NestedModal
                openModal={openModal}
                setOpenModal={setOpenModal}
                actionName={actionName}
            />
            {items.map(({ actionName, title, ariaLabel }) => (
                <CustomizedAccordionItem
                    key={actionName}
                    expanded={expanded}
                    handleChange={handleChange}
                    value={actionName}
                    title={title}
                >
                    {childrenHandler(
                        actionName,
                        ariaLabel,
                        title,
                        onClickHandler
                    )}
                </CustomizedAccordionItem>
            ))}
        </Box>
    );
}
