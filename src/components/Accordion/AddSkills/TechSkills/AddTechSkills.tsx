import { AddButton } from 'components/Buttons';

export const AddTechSkills = () => {
    return (
        <AddButton
            ariaLabel={'add-tech-skills-button'}
            iconName={'add'}
            action={'tech'}
        >
            Add Tech Skills
        </AddButton>
    );
};
