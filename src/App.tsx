import './App.css'
import { FacSection } from './FacSection/FacSection'
import { HeroBannerSection } from './HeroBannerSection/HeroBannerSection'
import { IssuerLogoSection } from './IssuerLogoSection/IssuerLogoSection'
import { PopularCardSection } from './PopularCardSection/PopularCardSection'
import { SpecialCardSection } from './SpecialCardSection/SpecialCardSection'

function App() {

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

export default App
