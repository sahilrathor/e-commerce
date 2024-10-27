export interface Item {
    _id: string;
    name: string;
    price: number;
    image: string;
    category: string[];
    quantity: number;
    description: string;
}

export interface ItemStore {
    items: Item[];
    setItems: (items: Item[]) => void;
}

export interface CartItem {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}