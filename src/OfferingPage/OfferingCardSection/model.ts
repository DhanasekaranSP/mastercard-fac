import { ChildItemI } from "../FilterAccordionSection/model"
export type CategoryListI={
    parentId:number,
    childId:number
}

export type OfferingCardI ={
    id: number,
    cardName : string,
    cardImageUrl: string, 
    applyNowUrl:string,
    rateFeesUrl:string,

    cardheadLine : string,
    cardDescription : string,
    annualFees:number,
    specialFees?:number,

    issuer:ChildItemI[],
    categoryList:CategoryListI[]
}