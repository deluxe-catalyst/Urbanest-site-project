interface Category {
    id: number;
    name: string;
    count: number | (() => number);
}

const calculateTotalCount = (categories: Category[]): number => {
    return categories.slice(0, -1).reduce((acc, category) => acc + (typeof category.count === 'number' ? category.count : 0), 0);
}

const categoriesList = [
    {
        id: 1,
        name: 'sofas',
        count: 38
    },
    {
        id: 2,
        name: 'armchairs',
        count: 97
    },
    {
        id: 3,
        name: 'tables',
        count: 27
    },
    {
        id: 4,
        name: 'decor',
        count: 97
    },
    {
        id: 5,
        name: 'lighting',
        count: 72
    },
    {
        id: 6,
        name: 'all',
        count: 0,
    }
]

categoriesList[categoriesList.length - 1].count = calculateTotalCount(categoriesList);




export default categoriesList;