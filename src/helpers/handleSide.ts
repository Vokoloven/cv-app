export const handleSide = (width: number) => {
    if (width < 768) {
        return 'left';
    } else {
        return 'right';
    }
};
