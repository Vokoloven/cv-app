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
import { TInput } from 'components/Modal/Modal';
import { AppDispatch } from 'redux/store';
import { getFirestoreDatabase } from 'redux/service';
import { deleteStoragePhoto } from './deleteStoragePhoto';
import { actionNameArray, isArray } from './isArray';
import { subExperienceUpdater } from './subExperienceUpdater';
import { subExperienceDelete } from './subExperienceDelete';

export const collectionName = import.meta.env.VITE_COLLECTION;

export const firebaseSetDoc = async (
    actionName: string | null,
    input: TInput<string>,
    dispatch: AppDispatch,
    subId?: string | null,
    data?: DocumentData
) => {
    const collectionRef = collection(db, `${collectionName}`);
    const docRef = doc(collectionRef, `${actionName}`);
    const idRef = docRef.id;
    const docRefDefaultId = doc(collectionRef);
    const { id } = docRefDefaultId;
    const docSnap = await getDoc(docRef);

    if (actionName === 'subExperience' && data && subId) {
        subExperienceUpdater(collectionRef, input, data, subId, actionName);
        await dispatch(getFirestoreDatabase(collectionName));
    }

    if (!isArray(actionNameArray, actionName)) {
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
    path: string | null,
    index: number | null,
    dispatch: AppDispatch
) => {
    const collectionRef = collection(db, `${collectionName}`);

    if (actionName === 'subExperience' && data && index !== undefined) {
        subExperienceDelete(collectionRef, data, itemId, actionName, index);
        await dispatch(getFirestoreDatabase(collectionName));
    }

    if (isArray(actionNameArray, actionName) && actionName) {
        const docRef = doc(collectionRef, `${actionName}`);

        const filteredDoc = data?.filter(
            ({ id }: DocumentData) => id !== itemId
        );
        await setDoc(docRef, { [actionName]: filteredDoc });
        await dispatch(getFirestoreDatabase(collectionName));
        deleteStoragePhoto(actionName, path);
    } else {
        const docRef = doc(collectionRef, `${actionName}`);
        await deleteDoc(docRef);
        await dispatch(getFirestoreDatabase(collectionName));
        deleteStoragePhoto(actionName, path);
    }
};
