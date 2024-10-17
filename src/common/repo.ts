import { fetchData } from "./api"
import { FaqSectionI } from "../LandingPage/FaqSection/model"
import { CardTemplateI } from "../LandingPage/PopularCardSection/model"
import { SpecialCardTemplateI } from "../LandingPage/SpecialCardSection/model"
import { FilterItemI } from "../OfferingPage/FilterAccordionSection/model"
import { OfferingCardI } from "../OfferingPage/OfferingCardSection/model"

export const getAllFaq =  async ()=>{
    const response  = await fetchData("/faqs")
    return response as FaqSectionI[]
}

export const getAllPopularCards = async () => {
    const response = await fetchData("/popular-cards/?is_special=false")
    return response as CardTemplateI[]
}

export const getAllSpecialCards = async () => {
    const response = await fetchData("/popular-cards/?is_special=true")
    return response as SpecialCardTemplateI[]
}

export const getAllFilterCategories = async() =>{
    const response = await fetchData("/filter-categories")
    return response as FilterItemI[]
}

export const getAllOfferingCards = async() =>{
    const response = await fetchData("/offering-cards")
    return response as OfferingCardI[]
}