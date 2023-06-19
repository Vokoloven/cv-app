import { DocumentData } from 'firebase/firestore';
import { TInput } from 'components/Modal/Modal';

export const handleSubUpdateFields = (
    item: DocumentData,
    input: TInput<string>,
    actionName: string,
    isTrue: boolean,
    prevValue: DocumentData
) => {
    if (isTrue) {
        const subExperienceUpdate = {
            ...item,
            ...{
                [actionName]: [
                    ...(item?.[actionName] ?? []),
                    ...[input?.[actionName as never]],
                ],
            },
        };

        return prevValue.push(subExperienceUpdate);
    } else {
        const subExperienceUpdate = {
            ...item,
            ...{ [actionName]: [input?.[actionName as never]] },
        };
        return prevValue.push(subExperienceUpdate);
    }
};

export const handleSubDeleteFields = (
    item: DocumentData,
    actionName: string,
    index: number | null,
    prevValue: DocumentData
) => {
    const subExperience = item?.[actionName];
    const copySubExperience = [...subExperience];
    copySubExperience.splice(index as number, 1);

    return prevValue.push({
        ...item,
        ...{ subExperience: copySubExperience },
    });
};
