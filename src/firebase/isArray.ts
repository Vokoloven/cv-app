export const actionNameArray: string[] = [
    'techSkills',
    'softSkills',
    'languages',
    'projects',
    'experience',
    'education',
];

export const isArray = (
    actionNameArray: string[],
    actionName: string | null
) => {
    const isArray = actionNameArray.some((item) => item === actionName);

    return isArray;
};
