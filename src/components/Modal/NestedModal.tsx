// import { useSelector } from 'react-redux';
// import { selectData } from 'redux/getDataSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Forms } from 'components/Forms/';
import { ModalButton } from 'components/Buttons';
import { firebaseSetDoc } from 'firebase/';
import { TSetStateBoolean } from 'types/globalTypes';
import { AppDispatch } from 'redux/store';

export type TInput<T> = {
    [x: string]: T;
};

type TProps = {
    openModal: boolean;
    setOpenModal: TSetStateBoolean;
    actionName: string | null;
};

const buttons: Readonly<'Cancel' | 'Ok'>[] = ['Cancel', 'Ok'];

export const NestedModal = ({
    openModal,
    setOpenModal,
    actionName,
}: TProps) => {
    // const { data } = useSelector(selectData);
    const [input, setInput] = useState<TInput<string>>({});
    const dispatch = useDispatch<AppDispatch>();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = {
            [e.target.id]: e.target.value,
        };

        setInput((prevState: TInput<string>) => ({ ...prevState, ...value }));
    };

    const closeModal = (value: 'Cancel' | 'Ok') => {
        setOpenModal(false);
        if (value === 'Ok') {
            firebaseSetDoc(actionName, input, dispatch);
        }
        setInput({});
    };

    return (
        <Box>
            <Dialog
                open={openModal}
                onClose={closeModal}
                disableRestoreFocus
                aria-describedby="dialog add items"
                scroll={'paper'}
            >
                <DialogTitle>
                    Fill the "{actionName?.toUpperCase()}" Form
                </DialogTitle>
                <DialogContent>
                    <Forms
                        actionName={actionName}
                        onChangeHandler={onChangeHandler}
                        input={input}
                    />
                </DialogContent>
                <DialogActions
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-around',
                        mt: 2,
                        pb: 2,
                    }}
                >
                    {buttons.map((button) => (
                        <ModalButton
                            key={button}
                            ariaLabel={'Close Button'}
                            iconName={button}
                            closeModal={closeModal}
                        >
                            {button}
                        </ModalButton>
                    ))}
                </DialogActions>
            </Dialog>
        </Box>
    );
};
