export type Item ={
    id: number;
    name: string;
}

export type Title = {
    id: number;
    name: string;
    items: Item[];
}
