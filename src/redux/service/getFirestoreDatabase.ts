import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from 'firebase/';

export const getFirestoreDatabase = createAsyncThunk(
    'get/FirestoreDatabase',
    async (collectionName: string, { rejectWithValue }) => {
        const promise: Promise<DocumentData> = new Promise(
            (resolve, reject) => {
                (async () => {
                    try {
                        const data: DocumentData = [];
                        const querySnapshot = await getDocs(
                            collection(db, `${collectionName}`)
                        );

                        if (querySnapshot?.empty) {
                            throw new Error('Document not found');
                        } else {
                            querySnapshot?.forEach((doc) => {
                                data.push({ [doc.id]: doc.data() });
                            });

                            resolve(data);
                        }
                    } catch (error) {
                        if (error instanceof Error) {
                            reject(error.message);
                        }
                    }
                })();
            }
        );
        return promise
            .then((response) => response)
            .catch((error) => rejectWithValue(error));
    }
);
