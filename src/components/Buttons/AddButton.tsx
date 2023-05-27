import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { TChildren } from 'types/globalTypes';

type TName = 'add';

type TProps = {
    ariaLabel: string;
    iconName: TName;
    action: 'tech' | 'soft' | 'languages';
};

type TCombineProps = TChildren & TProps;

export const AddButton = ({
    children,
    ariaLabel,
    iconName,
    action,
}: TCombineProps) => {
    const iconsHandler = (iconName: TName) => {
        switch (iconName) {
            case 'add':
                return <AddCircleOutlineIcon />;

            default:
                return;
        }
    };

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
            endIcon={iconsHandler(iconName)}
            variant="outlined"
        >
            {children}
        </Button>
    );
};
