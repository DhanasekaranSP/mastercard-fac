import { fetchData } from "./api"
import { FacSectionI } from "../FacSection/model"
import { CardTemplateI } from "../PopularCardSection/model"

export const getAllFaq =  async ()=>{
    const response  = await fetchData("/faqs")
    return response as FacSectionI[]
}

export const getAllPopularCards = async () => {
    const response = await fetchData("/popular-cards")
    return response as CardTemplateI[]
}