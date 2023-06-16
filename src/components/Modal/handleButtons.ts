export const handleButton = (
    button: Readonly<'Cancel' | 'Ok'>,
    activeButton: boolean,
    actionName: string | null
): boolean | undefined => {
    if (actionName === 'projects' && button === 'Ok') {
        return activeButton;
    }
};
