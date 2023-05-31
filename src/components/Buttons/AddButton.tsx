import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { TChildren } from 'types/globalTypes';
import { TActionName } from 'components/Accordion/items';

type TProps = {
    ariaLabel: string;
    action: TActionName;
};

type TCombineProps = TChildren & TProps;

export const AddButton = ({ children, ariaLabel, action }: TCombineProps) => {
    return (
        <Button
            onClick={() => console.log(action)}
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
