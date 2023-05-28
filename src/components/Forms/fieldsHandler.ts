const nameFields = [
    { id: 'firstName', label: 'First Name' },
    { id: 'secondName', label: 'Second Name' },
    { id: 'position', label: 'Position' },
];

const summaryFields = [{ id: 'description', label: 'Description' }];

export const fieldsHandler = (actionName: string | null) => {
    switch (actionName) {
        case 'Name':
            return nameFields;
            break;
        case 'Summary':
            return summaryFields;
            break;

        default:
            return null;
            break;
    }
};
