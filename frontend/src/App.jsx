
import { useRef } from 'react';
import Arrow from '/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/parrow.svg'
import './App.css'
import NavBar from "./NavBar";
import Card from './CardMobileView';
import Card2 from './CardLaptopView';
import orah3 from "/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/orah3.png";
import orah2 from "/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/orah2.png";
import brig1 from "/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/brig1.png";
import brig2 from "/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/brig2.png";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import P5Effect from './p5Effect';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.redirect;
    if (redirect) {
      sessionStorage.removeItem('redirect');
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  // Step 1: Create the ref for the cards section
  const cardsSectionRef = useRef(null);

  // Function to scroll to the cards section
  const scrollToCardsSection = () => {
    cardsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
  <>
  
      < NavBar scrollToCardsSection={scrollToCardsSection} />

      {/* Hero section */}
      
      <div className="frame">
       
        <P5Effect />

        <div className="div">
          <div className="div-2">

            <div className="div-3">
              <div className="text-wrapper">shabicha</div>
              <div className="text-wrapper-2">sa-/bee/-sha</div>
            </div>

            <p className="product-designer">
              <p>Software engineer & product designer.</p>
              <p>Building solutions from 0 → 100</p>
            </p>
          </div>
          
          <div className="div-4" onClick={scrollToCardsSection} style={{ cursor: 'pointer' }}>
            <div className="text-wrapper-3">MY WORK</div>
            <img className="vector" alt="Vector" src={Arrow} />
          </div>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="cards-section" ref={cardsSectionRef} >
        <Card
          image1={orah3}
          image2={orah2}
          title="orah"
          role="Software Developer & Lead Product Designer"
          description="— Gamifying screen-time reduction."
          projectId="orah"
        />
        <Card2
          image1={brig1}
          image2={brig2}
          title="brig.ai"
          role="Machine Learning Engineer & Product Manager"
          description="— AI tools for reproductive healthcare."
          projectId="brigAI"
        />
      </div>
    </>
     
  )
}

export default App
