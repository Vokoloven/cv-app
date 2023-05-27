import { AddButton } from 'components/Buttons';

export const AddSoftSkills = () => {
    return (
        <AddButton
            ariaLabel={'add-soft-skills-button'}
            iconName={'add'}
            action="soft"
        >
            Add Soft Skills
        </AddButton>
    );
};
