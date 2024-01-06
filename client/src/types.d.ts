export interface Book {
    author: {
        name: string;
        about: string;
    };
    name: string;
    image: string;
    category: string;
    stock: number;
    ratings: number;
    price: number;
    _id: string;
    description: string;
}
