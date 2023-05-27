import { AddButton } from 'components/Buttons';

export const AddLanguages = () => {
    return (
        <AddButton
            ariaLabel={'add-languages-button'}
            iconName={'add'}
            action={'languages'}
        >
            Add Languages
        </AddButton>
    );
};
