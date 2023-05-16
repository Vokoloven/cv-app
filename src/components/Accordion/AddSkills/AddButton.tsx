import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { TChildren } from 'types/globalTypes';

type TProps = {
    ariaLabel: string;
};

type CombineProps = TChildren & TProps;

export const AddButton = ({ children, ariaLabel }: CombineProps) => {
    return (
        <Button
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
            endIcon={<AddCircleOutlineIcon />}
            variant="outlined"
        >
            {children}
        </Button>
    );
};
