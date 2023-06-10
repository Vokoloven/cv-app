import * as React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { ModalButton } from 'components/Buttons';
import { selectAuth } from 'redux/authSlice';

type TProps = {
    open: boolean;
    actionName: string | null;
    handleClose: (value: 'Cancel' | 'Ok') => void;
};

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const AlertDialogSlide = ({ open, handleClose, actionName }: TProps) => {
    const { access } = useSelector(selectAuth);

    const accessHandler = (access: number, open: boolean) => {
        if (access === 0) {
            return open;
        } else {
            return false;
        }
    };

    return (
        <Box>
            <Dialog
                open={accessHandler(access, open)}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="dialog delete items"
                disableRestoreFocus
            >
                <DialogTitle>Delete {`"${actionName}"`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        You are sure want to delete this "{`${actionName}`}"?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <ModalButton
                        ariaLabel={'Close Button'}
                        iconName={'Cancel'}
                        closeModal={handleClose}
                    >
                        Cancel
                    </ModalButton>
                    <ModalButton
                        ariaLabel={'Ok Button'}
                        iconName={'Ok'}
                        closeModal={handleClose}
                    >
                        Ok
                    </ModalButton>
                </DialogActions>
            </Dialog>
        </Box>
    );
};
