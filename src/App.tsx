import './App.css'
import { FacSection } from './LandingPage/FacSection/FacSection'
import { HeroBannerSection } from './LandingPage/HeroBannerSection/HeroBannerSection'
import { IssuerLogoSection } from './LandingPage/IssuerLogoSection/IssuerLogoSection'
import { PopularCardSection } from './LandingPage/PopularCardSection/PopularCardSection'
import { SpecialCardSection } from './LandingPage/SpecialCardSection/SpecialCardSection'
import { FilterAccordionSection } from './OfferingPage/FilterAccordionSection/FilterAccordionSection'

function App() {

  const items = [
    {
      title: 'Fruits',
      children: [
        { id: 1, label: 'Apple' },
        { id: 2, label: 'Banana' },
        { id: 3, label: 'Cherry' },
      ],
    },
    {
      title: 'Vegetables',
      children: [
        { id: 4, label: 'Carrot' },
        { id: 5, label: 'Lettuce' },
        { id: 6, label: 'Spinach' },
      ],
    },
  ];
  return (
    <div className='landing-page'>
      <HeroBannerSection />
      <PopularCardSection />
      <IssuerLogoSection />
      <FacSection />
      <SpecialCardSection />
      <FilterAccordionSection items={items} />
    </div>
  )
}

export default App
