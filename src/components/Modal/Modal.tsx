import * as React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { SetStateAction, Dispatch } from 'react';
import { ModalButton } from 'components/Buttons';
import { Forms } from 'components/Forms/';

type TProps = {
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
    actionName: string | null;
};

const buttons: Readonly<'Ok' | 'Cancel'>[] = ['Cancel', 'Ok'];

export const Modal = ({ openModal, setOpenModal, actionName }: TProps) => {
    const closeModal = (
        _event: React.SyntheticEvent<unknown>,
        reason?: string
    ) => {
        if (reason !== 'backdropClick') {
            setOpenModal(false);
        }
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = {
            [e.target.id]: e.target.value,
        };

        console.log(value);
    };

    return (
        <Box>
            <Dialog
                disableEscapeKeyDown
                open={openModal}
                onClose={closeModal}
                disableRestoreFocus
            >
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                    <Box
                        onChange={onChangeHandler}
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Forms actionName={actionName} />
                    </Box>
                </DialogContent>
                <DialogActions>
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
