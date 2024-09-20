import { fetchData } from "./api"
import { FacSectionI } from "../FacSection/model"
import { CardTemplateI } from "../PopularCardSection/model"
import { SpecialCardTemplateI } from "../SpecialCardSection/model"

export const getAllFaq =  async ()=>{
    const response  = await fetchData("/faqs")
    return response as FacSectionI[]
}

export const getAllPopularCards = async () => {
    const response = await fetchData("/popular-cards/?is_special=false")
    return response as CardTemplateI[]
}

export const getAllSpecialCards = async () => {
    const response = await fetchData("/popular-cards/?is_special=true")
    return response as SpecialCardTemplateI[]
}