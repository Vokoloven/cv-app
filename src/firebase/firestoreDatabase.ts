import {
    doc,
    setDoc,
    getDoc,
    collection,
    updateDoc,
    arrayUnion,
    DocumentData,
    deleteDoc,
} from 'firebase/firestore';
import { db } from 'firebase/';
import { TInput } from 'components/Modal/NestedModal';
import { AppDispatch } from 'redux/store';
import { getFirestoreDatabase } from 'redux/service';
import { getStorage, ref, deleteObject } from 'firebase/storage';

export const collectionName = import.meta.env.VITE_COLLECTION;

const firebaseArray: string[] = [
    'techSkills',
    'softSkills',
    'languages',
    'projects',
    'experience',
    'education',
];

const isArray = (firebaseArray: string[], actionName: string | null) => {
    const isArray = firebaseArray.some((item) => item === actionName);

    return isArray;
};

export const firebaseSetDoc = async (
    actionName: string | null,
    input: TInput<string>,
    dispatch: AppDispatch
) => {
    const collectionRef = collection(db, `${collectionName}`);
    const docRef = doc(collectionRef, `${actionName}`);
    const idRef = docRef.id;
    const docRefDefaultId = doc(collectionRef);
    const { id } = docRefDefaultId;
    const docSnap = await getDoc(docRef);

    if (!isArray(firebaseArray, actionName)) {
        await setDoc(docRef, { id, ...input });
    } else if (docSnap.exists()) {
        actionName &&
            (await updateDoc(docRef, {
                [actionName]: arrayUnion({ id, ...input }),
            }));
    } else {
        await setDoc(docRef, { [idRef]: [{ id, ...input }] });
    }
    await dispatch(getFirestoreDatabase(collectionName));
};

export const firebaseDeleteDoc = async (
    actionName: string | null,
    data: DocumentData | null,
    itemId: string | null,
    dispatch: AppDispatch
) => {
    const collectionRef = collection(db, `${collectionName}`);
    if (isArray(firebaseArray, actionName) && actionName) {
        const docRef = doc(collectionRef, `${actionName}`);
        const filteredDoc = data?.filter(
            ({ id }: DocumentData) => id !== itemId
        );
        await setDoc(docRef, { [actionName]: filteredDoc });
        await dispatch(getFirestoreDatabase(collectionName));
    } else if (actionName === 'photo') {
        const storage = getStorage();
        const photoRef = ref(storage, `${itemId}`);
        const docRef = doc(collectionRef, `${actionName}`);
        await deleteDoc(docRef);
        await dispatch(getFirestoreDatabase(collectionName));
        await deleteObject(photoRef);
    } else {
        const docRef = doc(collectionRef, `${itemId}`);
        await deleteDoc(docRef);
        await dispatch(getFirestoreDatabase(collectionName));
    }
};
