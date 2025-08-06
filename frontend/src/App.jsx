
import { useRef } from 'react';
import Arrow from '/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/parrow.svg'
import './App.css'
import NavBar from "./NavBar";
import Card from './CardMobileView';
import Card2 from './CardLaptopView';
import orah3 from "/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/orah3.png";
import orahcard from "/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/orahcard.png";
import brigcard from "/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/brigcard.png";
import proteccard from "/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/proteccard.png";
import shoplenscard from "/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/shoplenscard.png";
import splitzcard from "/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/splitzcard.png";

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
  const [selectedCategories, setSelectedCategories] = useState([]);

  const cardsData = [
  {
    type: 'Card',
     categoryID: ['development', 'design'],
    props: {
      image1: orah3,
      image2: orah2,
      title: "ORAH",
      year: "2024",
      card: orahcard,
      tags: ["Product Design", "SwiftUI"],
      description: "Gamifying screen-time reduction.",
      projectId: "orah"
    }
  },
  {
     type: 'Card',
      categoryID: ['machine-learning', 'design'],
    props: {
      image1: orah3,
      image2: orah2,
      title: "BRIG.AI",
      year: "2024",
      card: brigcard,
      tags: ["K-Means Clustering", "Linear Regression", "Product"],
      description: "AI tools for reproductive healthcare.",
      projectId: "brigAI"
    }
  },
    {
     type: 'Card',
      categoryID: ['machine-learning', 'design', 'development'],

    props: {
      image1: orah3,
      image2: orah2,
      title: "SHOPLENS",
      year: "2025",
      card: shoplenscard,
      tags: ["Python", "Data Cleaning", "VGG16", "CLIP", "React.JS"],
      description: " Image-based search for e-commerce platforms.",
      projectId: "https://github.com/shabicha/shoplens"
    }
  },

    {
     type: 'Card',
      categoryID: ['development', 'design'],

    props: {
      image1: orah3,
      image2: orah2,
      title: "SPLITZ",
      year: "2025",
      card: splitzcard,
      tags: ["iOS Development", "Swift"],
      description: "Split the bill on iMessages.",
      projectId: "https://github.com/shabicha/Split"
    }
  },

    {
     type: 'Card',
     categoryID: ['machine-learning', 'design', 'development'],

    props: {
      image1: orah3,
      image2: orah2,
      title: "PROTECH",
      year: "2023",
      card: proteccard,
      tags: ["Front-End Development", "SwiftUI", "Co-ML"],
      description: "Machine learning for campus safety.",
      projectId: "https://github.com/shabicha/ProTech"
    }
  }
];
const filteredCards = selectedCategories.length === 0 
  ? cardsData // all if no categories selected
  : cardsData.filter(card => 
      card.categoryID.some(category => selectedCategories.includes(category))
    );
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
class="flex flex-col items-center justify-center bg-[#e9fd53] gap-[8.82px] w-[30px] h-[24px] p-[8.82px_6.17px] relative hover:opacity-50 transition-opacity duration-300 ease-in-out">
              <img class="w-[15px] h-[15px] relative" alt="Vector" src={github} />
          </div>
            </div>

      </div>
   
      </div>
        {/* tab pagination */}
<div className="tabpag">
  <div className="tabpagstyle">
    <div 
      className={`text-[#31302e] text-[12px] font-normal font-['Heebo'] cursor-pointer ${selectedCategories.includes('development')? 'bg-[#e9fd53]' : ''}`}
     onClick={() => {
        setSelectedCategories(prev => 
          prev.includes('development') 
            ? prev.filter(cat => cat !== 'development')
            : [...prev, 'development']
        );
      }}
    >
      DEVELOPMENT
    </div>
    <div 
      className={`text-[#31302e] text-[12px] font-normal font-['Heebo'] cursor-pointer ${selectedCategories.includes('design') ? 'bg-[#e9fd53]' : ''}`}
      onClick={() => {
        setSelectedCategories(prev => 
          prev.includes('design') 
            ? prev.filter(cat => cat !== 'design')
            : [...prev, 'design']
        );
      }}
    >
      DESIGN
    </div>
    <div 
      className={`text-[#31302e] text-[12px] font-normal font-['Heebo'] cursor-pointer ${selectedCategories.includes('machine-learning') ? 'bg-[#e9fd53]' : ''}`}
onClick={() => {
        setSelectedCategories(prev => 
          prev.includes('machine-learning') 
            ? prev.filter(cat => cat !== 'machine-learning')
            : [...prev, 'machine-learning']
        );
      }}    >
      MACHINE LEARNING
    </div>
  </div>
</div>
</div>
      {/* Navigation Links */}
      <div className="cards-section " ref={cardsSectionRef} >
     {filteredCards.map((card, index) => (
    <div 
      key={card.props.projectId}
      onMouseEnter={() => setHoveredCard(true)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {card.type === 'Card' ? <Card {...card.props} /> : <Card2 {...card.props} />}
    </div>
  ))}
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
