const nameFields = [
    { id: 'firstName', label: 'First Name' },
    { id: 'secondName', label: 'Second Name' },
    { id: 'position', label: 'Position' },
];

export const fieldsHandler = (actionName: string | null) => {
    switch (actionName) {
        case 'Name':
            return nameFields;
            break;

        default:
            return null;
            break;
    }
};
