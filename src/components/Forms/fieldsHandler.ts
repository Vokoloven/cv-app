const testValue: boolean = true;

const nameFields = [
    { id: 'firstName', label: 'First Name' },
    { id: 'secondName', label: 'Second Name' },
    { id: 'position', label: 'Position' },
];

const summaryFields = [{ id: 'description', label: 'Description' }];

const projectsFields = [
    { id: 'repo', label: 'Repo' },
    { id: 'link', label: 'Link' },
    { id: 'tools', label: 'Tools' },
    { id: 'description', label: 'Description' },
];

const experienceFields = [
    { id: 'title', label: 'Title' },
    { id: 'period', label: 'Period' },
];

const experienceFieldsItems = [{ id: 'item', label: 'Item' }];

const educationFields = [
    { id: 'institution ', label: 'Institution ' },
    { id: 'period ', label: 'Period ' },
    { id: 'degree ', label: 'Degree ' },
];

const experienceFieldsHandler = (testValue: boolean) => {
    if (testValue) {
        return experienceFields;
    } else {
        return experienceFieldsItems;
    }
};

export const fieldsHandler = (actionName: string | null) => {
    switch (actionName) {
        case 'Name':
            return nameFields;
            break;
        case 'Summary':
            return summaryFields;
            break;
        case 'Projects':
            return projectsFields;
            break;
        case 'Experience':
            return experienceFieldsHandler(testValue);
            break;
        case 'Education':
            return educationFields;
            break;

        default:
            return null;
            break;
    }
};
