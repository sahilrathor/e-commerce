export interface Item {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}

export interface ItemStore {
    items: Item[];
    setItems: (items: Item[]) => void;
}