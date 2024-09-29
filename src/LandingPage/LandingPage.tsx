import { HeroBannerSection } from './HeroBannerSection/HeroBannerSection'
import { IssuerLogoSection } from './IssuerLogoSection/IssuerLogoSection'
import { PopularCardSection } from './PopularCardSection/PopularCardSection'
import { FacSection } from './FacSection/FacSection'
import { SpecialCardSection } from './SpecialCardSection/SpecialCardSection'
import './LandingPage.css'

export const LandingPage = () => {
    return (
        <div className='landing-page'>
            <HeroBannerSection />
            <PopularCardSection />
            <IssuerLogoSection />
            <FacSection />
            <SpecialCardSection />
        </div>
    )
}
