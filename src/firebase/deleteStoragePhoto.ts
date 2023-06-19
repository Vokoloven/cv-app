import { getStorage, ref, deleteObject } from 'firebase/storage';

export const deleteStoragePhoto = async (
    actionName: string | null,
    path: string | null
) => {
    const storage = getStorage();

    if (actionName === 'photo' || actionName === 'projects') {
        const photoRef = ref(storage, `${path}`);
        await deleteObject(photoRef);
    }
};
