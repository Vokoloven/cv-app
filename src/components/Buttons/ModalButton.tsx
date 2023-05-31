import Button from '@mui/material/Button';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { TChildren } from 'types/globalTypes';

type TName = 'Cancel' | 'Ok';

type TProps = {
    ariaLabel: string;
    iconName: TName;
    closeModal: (value: string) => void;
};

type TCombineProps = TChildren & TProps;

export const ModalButton = ({
    children,
    ariaLabel,
    iconName,
    closeModal,
}: TCombineProps) => {
    const iconsHandler = (iconName: TName) => {
        switch (iconName) {
            case 'Cancel':
                return <CloseIcon />;

            case 'Ok':
                return <CheckIcon />;

            default:
                return;
        }
    };

    return (
        <Button
            onClick={closeModal.bind(null, iconName)}
            aria-label={ariaLabel}
            sx={(theme) => ({
                ...(theme.palette.mode === 'light'
                    ? {
                          bgcolor: 'primary.button.complementary',
                          border: '1px solid transparent',
                          '&:hover': {
                              bgcolor: 'primary.button.triadic.primary',
                              color: 'primary.typography.text.complementary',
                              border: `1px solid ${theme.palette.primary.button.complementary}`,
                          },
                      }
                    : {
                          bgcolor: 'primary.button.primary',
                          border: '1px solid transparent',
                          '&:hover': {
                              bgcolor: 'primary.button.primary.complementary',
                              color: 'primary.typography.text.complementary',
                              border: `1px solid ${theme.palette.primary.button.primary}`,
                          },
                      }),
            })}
            endIcon={iconsHandler(iconName)}
            variant="outlined"
        >
            {children}
        </Button>
    );
};
