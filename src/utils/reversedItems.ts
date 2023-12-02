export const reversedItems = (items: []) => {
    if (items) {
        const reversedItems = [...items].reverse();

        return reversedItems;
    }
    return [];
};
