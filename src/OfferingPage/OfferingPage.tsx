import { FilterAccordionSection } from "./FilterAccordionSection/FilterAccordionSection"
import { OfferingCardSection } from "./OfferingCardSection/OfferingCardSection"
import './OfferingPage.css'

export const OfferingPage = () => {
    return (
        <div className='offering-page'>
            <FilterAccordionSection />
            <OfferingCardSection />
        </div>
    )
}
