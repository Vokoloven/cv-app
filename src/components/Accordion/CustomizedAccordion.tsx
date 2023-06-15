import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { CustomizedAccordionItem } from './CustomizedAccordionItem';
import { AddContacts } from './AddContacts';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/authSlice';
import { AddButton } from 'components/Buttons';
import { TActionName, items, TTitle } from './items';
import { NestedModal } from 'components/Modal/NestedModal';
import { PaperItems } from '.';
import { selectData } from 'redux/getDataSlice';
import { CustomSkeleton } from 'components/Skeleton';

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
    const { loading } = useSelector(selectData);

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
            {items.map(({ actionName, title, ariaLabel }) => (
                <Box key={actionName}>
                    <CustomizedAccordionItem
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
                    {actionName === 'contacts' ? (
                        <CustomSkeleton
                            loading={loading}
                            spacing={1}
                            skeletonProps={[
                                {
                                    id: '1',
                                    variant: 'text',
                                    width: 300,
                                    height: 20,
                                },
                                {
                                    id: '2',
                                    variant: 'text',
                                    width: 300,
                                    height: 20,
                                },
                                {
                                    id: '3',
                                    variant: 'text',
                                    width: 300,
                                    height: 20,
                                },
                                {
                                    id: '4',
                                    variant: 'text',
                                    width: 300,
                                    height: 20,
                                },
                                {
                                    id: '5',
                                    variant: 'text',
                                    width: 300,
                                    height: 20,
                                },
                            ]}
                        />
                    ) : (
                        <CustomSkeleton
                            loading={loading}
                            spacing={1}
                            skeletonProps={[
                                {
                                    id: '1',
                                    variant: 'text',
                                    width: 300,
                                    height: 20,
                                },
                                {
                                    id: '2',
                                    variant: 'text',
                                    width: 300,
                                    height: 20,
                                },
                                {
                                    id: '3',
                                    variant: 'text',
                                    width: 300,
                                    height: 20,
                                },
                            ]}
                        />
                    )}
                    {loading === 'succeeded' && (
                        <PaperItems actionName={actionName} />
                    )}
                </Box>
            ))}
            <NestedModal
                openModal={openModal}
                setOpenModal={setOpenModal}
                actionName={actionName}
            />
        </Box>
    );
}
