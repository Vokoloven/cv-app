import {
    doc,
    setDoc,
    getDoc,
    collection,
    updateDoc,
    arrayUnion,
    // DocumentData,
} from 'firebase/firestore';
import { db } from 'firebase/';
import { TInput } from 'components/Modal/NestedModal';
import { AppDispatch } from 'redux/store';
import { getFirestoreDatabase } from 'redux/service';

export const collectionName = import.meta.env.VITE_COLLECTION;

const firebaseArray: string[] = [
    'techSkills',
    'softSkills',
    'languages',
    'projects',
    'Experience',
    'Education',
];

export const firebaseSetDoc = async (
    actionName: string | null,
    input: TInput<string>,
    dispatch: AppDispatch
) => {
    const isArray = firebaseArray.some((item) => item === actionName);
    const collectionRef = collection(db, `${collectionName}`);
    const docRef = doc(collectionRef, `${actionName}`);
    const idRef = docRef.id;
    const docRefDefaultId = doc(collectionRef);
    const { id } = docRefDefaultId;
    const docSnap = await getDoc(docRef);

    if (!isArray) {
        await setDoc(docRef, { id, ...input });
    } else if (docSnap.exists()) {
        actionName &&
            (await updateDoc(docRef, {
                [actionName]: arrayUnion({ id, ...input }),
            }));
    } else {
        await setDoc(docRef, { [idRef]: [{ id, ...input }] });
    }
    dispatch(getFirestoreDatabase(collectionName));
};

// export const firebaseDeleteDoc = async (actionName: string | null) => {
//     const collectionRef = collection(db, `${collectionName}`);
//     const docRef = doc(collectionRef, `${actionName}`);
//     if (actionName) {
//         const requiredDoc = data.find((doc: DocumentData) => doc?.[actionName]);
//         const parsedDoc = requiredDoc?.[actionName]?.[actionName];
//         const filteredDoc = parsedDoc.filter(
//             ({ id }: DocumentData) => id !== 'S5f97B5QePdH4i7DkOwE'
//         );
//         await setDoc(docRef, { filteredDoc });
//     }
// };
