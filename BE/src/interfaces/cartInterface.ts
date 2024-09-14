export interface Cart {
    _id: string;
    userId: string;
    items: {
        itemId: string;
        quantity: number;
    }[];
    createdAt: Date;
    updatedAt: Date;
}