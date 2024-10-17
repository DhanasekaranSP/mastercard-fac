import { HeroBannerSection } from './HeroBannerSection/HeroBannerSection'
import { IssuerLogoSection } from './IssuerLogoSection/IssuerLogoSection'
import { PopularCardSection } from './PopularCardSection/PopularCardSection'
import { FaqSection } from './FaqSection/FaqSection'
import { SpecialCardSection } from './SpecialCardSection/SpecialCardSection'
import './LandingPage.css'

export const LandingPage = () => {
    return (
        <div className='landing-page'>
            <HeroBannerSection />
            <PopularCardSection />
            <IssuerLogoSection />
            <FaqSection />
            <SpecialCardSection />
        </div>
    )
}
