import {
    doc,
    setDoc,
    DocumentData,
    CollectionReference,
} from 'firebase/firestore';
import { handleSubDeleteFields } from './handleSubFields';

export const subExperienceDelete = async (
    collectionRef: CollectionReference<DocumentData>,
    data: DocumentData,
    subId: string | null,
    actionName: string,
    index: number | null
) => {
    const docRef = doc(collectionRef, 'experience');
    const subExperienceDelete = data?.reduce(
        (prevValue: DocumentData, item: DocumentData) => {
            if (item?.id === subId) {
                handleSubDeleteFields(item, actionName, index, prevValue);
            } else {
                prevValue.push(item);
            }
            return prevValue;
        },
        []
    );

    await setDoc(docRef, { experience: subExperienceDelete });
};
