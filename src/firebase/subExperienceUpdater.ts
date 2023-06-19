import { handleSubUpdateFields } from './handleSubFields';
import {
    doc,
    setDoc,
    DocumentData,
    CollectionReference,
} from 'firebase/firestore';
import { TInput } from 'components/Modal/Modal';

export const subExperienceUpdater = async (
    collectionRef: CollectionReference<DocumentData>,
    input: TInput<string>,
    data: DocumentData,
    subId: string | null,
    actionName: string
) => {
    const docRef = doc(collectionRef, 'experience');
    const subExperienceUpdater = data?.reduce(
        (prevValue: DocumentData, item: DocumentData) => {
            if (item?.id === subId) {
                item?.[actionName]
                    ? handleSubUpdateFields(
                          item,
                          input,
                          actionName,
                          true,
                          prevValue
                      )
                    : handleSubUpdateFields(
                          item,
                          input,
                          actionName,
                          false,
                          prevValue
                      );
            } else {
                prevValue.push(item);
            }

            return prevValue;
        },
        []
    );

    await setDoc(docRef, { experience: subExperienceUpdater });
};
