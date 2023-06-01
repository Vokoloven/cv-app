import { dataFields } from './fields';

export const fieldsHandler = (actionName: string | null) => {
    const filteredFields = dataFields.find(({ name }) => actionName === name);

    if (filteredFields !== undefined) {
        const { fields } = filteredFields;
        return fields;
    }
};
