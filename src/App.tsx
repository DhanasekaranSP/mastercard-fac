// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from './LandingPage/LandingPage';
import { OfferingPage } from './OfferingPage/OfferingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/offering-page" element={<OfferingPage />} />
      </Routes>
    </Router>
  );
};

export default App;

// import { FacSection } from './LandingPage/FacSection/FacSection'
// import { HeroBannerSection } from './LandingPage/HeroBannerSection/HeroBannerSection'
// import { IssuerLogoSection } from './LandingPage/IssuerLogoSection/IssuerLogoSection'
// import { PopularCardSection } from './LandingPage/PopularCardSection/PopularCardSection'
// import { SpecialCardSection } from './LandingPage/SpecialCardSection/SpecialCardSection'
// import { FilterAccordionSection } from './OfferingPage/FilterAccordionSection/FilterAccordionSection'
// import { OfferingCardSection } from './OfferingPage/OfferingCardSection/OfferingCardSection'

// function App() {
//   return (
//     <div className='landing-page'>
//       <HeroBannerSection />
//       <PopularCardSection />
//       <IssuerLogoSection />
//       <FacSection />
//       <SpecialCardSection />
//       {/* <FilterAccordionSection />
//       <OfferingCardSection /> */}
//     </div>
//   )
// }

// export default App
