
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
import github from "/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/github.svg";
import linkedin from "/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/linkedin.svg";
import noise from "/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/noise.png"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import P5Effect from './p5Effect';

function App() {
  const navigate = useNavigate();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const redirect = sessionStorage.redirect;
    if (redirect) {
      sessionStorage.removeItem('redirect');
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

 useEffect(() => {
  const handleMouseMove = (e) => {
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  };

  document.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };
}, []);

  // ref for the cards section
  const cardsSectionRef = useRef(null);

  // Function to scroll to the cards section
  const scrollToCardsSection = () => {
    cardsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  

  return (
    <>
      < NavBar scrollToCardsSection={scrollToCardsSection} />

      {/* Hero section */}
       <div className="tabsframe"> 

      
      <div className="frame">
       
        <P5Effect />

        <div className="div">
          <div className="div-2">

            <div className="div-3">
              <div className="text-wrapper">shabicha</div>
              <div className="text-wrapper-2">sa-/bee/-sha</div>
            </div>

            <p className="product-designer">
              <p>Software engineer building from 0 → 100. </p>
            </p>
          </div >
          
          {/* link to git and linkedin */}
             <div class = "flex flex-row gap-[11px]">
          <div 
            onClick={() => window.open("https://www.linkedin.com/in/shabicha-sureshkumar-0b7372200/", "_blank")}

          class="flex flex-col items-center justify-center bg-[#e9fd53] gap-[8.82px] w-[30px] h-[24px] p-[8.82px_6.17px] relative hover:opacity-50 transition-opacity duration-300 ease-in-out">
              <img class="w-[11px] h-[11px] relative" alt="Vector" src={linkedin} />
          </div>
<div 
 onClick={() => window.open("https://github.com/shabicha", "_blank")}
class="flex flex-col items-center justify-center bg-[#e9fd53] gap-[8.82px] w-[30px] h-[24px] p-[8.82px_6.17px] relative">
              <img class="w-[15px] h-[15px] relative" alt="Vector" src={github} />
          </div>
            </div>

      </div>
   
      </div>
        {/* tab pagination */}
 <div className="tabpag"> 
<div className="tabpagstyle">
  <div className="text-[#31302e] bg-[#e9fd53] text-[12px] font-normal font-['Heebo']">
    DEVELOPMENT
  </div>
  <div className="text-[#31302e] text-[12px] font-normal font-['Heebo']">
    DESIGN
  </div>
  <div className="text-[#31302e] text-[12px] font-normal font-['Heebo']">
    MACHINE LEARNING
  </div>
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
        <div onMouseEnter={() => setHoveredCard(true)}
            onMouseLeave={() => setHoveredCard(null)}>

       
        <Card2
          image1={brig1}
          image2={brig2}
          title="brig.ai"
          role="Machine Learning Engineer & Product Manager"
          description="— AI tools for reproductive healthcare."
          projectId="brigAI"
          
        />
         </div>
      </div>
       <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          transition: 'none' 
        }}
      >
        {!hoveredCard ? (
     <div className="flex items-start justify-start gap-[34px] h-[20px] w-[20px] outline-[1px] outline-[#eaecee] bg-[length:300px_auto] bg-left-top bg-white overflow-hidden"
     style={{
    background: 'rgba(255, 255, 255, 0.1)',
     backdropFilter: 'blur(0.5px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
   
  }}>
  <img className="flex-shrink-0 w-full h-full opacity-50 object-cover" alt="Group" src={noise} />
</div>
        ) : (




          <div className=" relative flex items-center justify-center w-30 h-[33px] outline-[1px] outline-[#eaecee] bg-[length:300px_auto] bg-left-top bg-white overflow-hidden duration-300 ease-out"
     style={{
    background: 'rgba(255, 255, 255, 0.1)',
     backdropFilter: 'blur(6px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
   
  }}>
      <img className=" absolute flex-shrink-0 w-full h-full opacity-50 object-cover" alt="Group" src={noise} />

            <span className="relative font-['Heebo'] text-[#31302e] text-[12px] uppercase tracking-wide whitespace-nowrap">
              View Project 
            </span>
          </div>
        )}
      </div>
      </>
     
  )
}

export default App
