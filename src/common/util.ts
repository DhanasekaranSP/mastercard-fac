import { ChildItemI, FilterItemI } from "../OfferingPage/FilterAccordionSection/model"

export const getSelectedFilterData = (filterData:FilterItemI[]) => {
    const selectedFilterData:ChildItemI[] = []
    filterData.forEach((filterItem) => {
        filterItem.childitems.forEach((child)=>{
            if(child.checked){
                selectedFilterData.push(child)
            }
        })
    })
    return selectedFilterData;
}