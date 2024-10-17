export type ChildItemI ={
    id: number;
    childname: string;
    checked:boolean;
}

export type FilterItemI = {
    id: number;
    parentname: string;
    childitems: ChildItemI[];
}
