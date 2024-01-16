export const getRowSizes = (totalItems: number, itemsHeight: number) => {
    const rowSizes = new Array(totalItems).fill(true).map(() => itemsHeight);
    return {
        getItemSize(index: number) {
            return rowSizes[index];
        },
    };
};