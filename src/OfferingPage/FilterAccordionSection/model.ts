export type Item ={
    id: number;
    childname: string;
}

export type TitleI = {
    id: number;
    parentname: string;
    childitems: Item[];
}
