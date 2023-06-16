export const handleButton = (
    button: Readonly<'Cancel' | 'Ok'>,
    activeButton: boolean
): boolean | undefined => {
    if (button === 'Ok') {
        return activeButton;
    }
};
