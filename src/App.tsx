import './App.css'
import { HeroBannerSection } from './HeroBannerSection/HeroBannerSection'
import { IssuerLogoSection } from './IssuerLogoSection/IssuerLogoSection'
import { PopularCardSection } from './PopularCardSection/PopularCardSection'

function App() {

  return (
    <div className='landing-page'>
      <HeroBannerSection />
      <PopularCardSection />
      <IssuerLogoSection />

    </div>
  )
}

export default App
