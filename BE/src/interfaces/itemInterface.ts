export interface itemInterface {
    id: string;
    name: string;
    description?: string;
    price: number;
    stock: number;
    image: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
}