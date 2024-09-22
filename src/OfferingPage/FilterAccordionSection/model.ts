export type AccordionItem ={
    title: string;
    children: ChildItem[];
}

export type ChildItem = {
    id: number;
    label: string;
}

export type FilterAccordionSectionProps = {
    items: AccordionItem[];
}