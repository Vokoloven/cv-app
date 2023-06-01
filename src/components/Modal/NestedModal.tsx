import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import { ChildModal } from './ChildModal';
import { ModalButton } from 'components/Buttons';
import { Forms } from 'components/Forms/';
import { TSetStateBoolean } from 'types/globalTypes';
import { doc, setDoc, collection, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const style = {
    position: 'absolute' as 'const',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: 4,
    boxShadow: 4,
    pt: 2,
    px: 4,
    pb: 3,
};

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
    const [input, setInput] = useState<TInput<string>>({});

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = {
            [e.target.id]: e.target.value,
        };

        setInput((prevState: TInput<string>) => ({ ...prevState, ...value }));
    };

    const closeModal = async (value: 'Cancel' | 'Ok') => {
        setOpenModal(false);
        if (value === 'Ok') {
            const collectionRef = collection(db, 'cvAppData');
            const docRef = doc(collectionRef, `${actionName}`);
            const idRef = docRef.id;

            await setDoc(docRef, { idRef, ...input });
        }
        setInput({});
    };

    return (
        <Box>
            <Modal
                open={openModal}
                onClose={closeModal}
                disableRestoreFocus
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box
                    sx={(theme) => ({
                        ...style,
                        width: 320,
                        ...(theme.palette.mode === 'light'
                            ? { bgcolor: 'primary.main' }
                            : {
                                  backgroundColor:
                                      'primary.background.triadic.complementary',
                                  backgroundImage: `${theme.palette.primary.background.linearGradient}`,
                              }),
                    })}
                >
                    <Forms
                        actionName={actionName}
                        onChangeHandler={onChangeHandler}
                        input={input}
                    />

                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-around',
                            mt: 2,
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
                    </Box>
                    {/* <ChildModal /> */}
                </Box>
            </Modal>
        </Box>
    );
};
