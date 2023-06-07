import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectData } from 'redux/getDataSlice';
import { DocumentData } from 'firebase/firestore';

export const useRequiredDoc = (actionName: string) => {
    const { data } = useSelector(selectData);
    const [value, setValue] = useState<DocumentData>(data);

    useEffect(() => {
        if (data.length !== 0) {
            const requiredDoc = data.find(
                (doc: DocumentData) => doc?.[actionName]
            );

            setValue(requiredDoc?.[actionName]);
        }
    }, [actionName, data]);

    return value;
};
