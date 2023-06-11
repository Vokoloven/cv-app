export const multilineHanlder = (id: string) => {
    switch (id) {
        case 'description':
            return true;
            break;

        case 'tools':
            return true;
            break;

        case 'position':
            return true;
            break;

        case 'summary':
            return true;
            break;

        default:
            return false;
            break;
    }
};
