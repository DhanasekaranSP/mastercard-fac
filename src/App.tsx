import './App.css'
import { FacSection } from './LandingPage/FacSection/FacSection'
import { HeroBannerSection } from './LandingPage/HeroBannerSection/HeroBannerSection'
import { IssuerLogoSection } from './LandingPage/IssuerLogoSection/IssuerLogoSection'
import { PopularCardSection } from './LandingPage/PopularCardSection/PopularCardSection'
import { SpecialCardSection } from './LandingPage/SpecialCardSection/SpecialCardSection'
import { FilterAccordionSection } from './OfferingPage/FilterAccordionSection/FilterAccordionSection'

function App() {
  return (
    <div className='landing-page'>
      {/* <HeroBannerSection />
      <PopularCardSection />
      <IssuerLogoSection />
      <FacSection />
      <SpecialCardSection /> */}
      <FilterAccordionSection />
    </div>
  )
}

export default App;
