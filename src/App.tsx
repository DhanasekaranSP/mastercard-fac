import './App.css'
import { FacSection } from './FacSection/FacSection'
import { HeroBannerSection } from './HeroBannerSection/HeroBannerSection'
import { IssuerLogoSection } from './IssuerLogoSection/IssuerLogoSection'
import { PopularCardSection } from './PopularCardSection/PopularCardSection'

function App() {

  return (
    <div className='landing-page'>
      <HeroBannerSection />
      <PopularCardSection />
      <IssuerLogoSection />
      <FacSection />

    </div>
  )
}

export default App
