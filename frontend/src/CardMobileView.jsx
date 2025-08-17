/* eslint-disable react/prop-types */
import './Card.css';
import { Link } from 'react-router-dom';


function Card({ image1, image2, title, year, card, tags,description, projectId }) {
    return (
        <>

        {projectId.startsWith('http') ? (
  <a href={projectId} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
     <div className="flex flex-col gap-[22px]  cursor-none">

          <img 
  className="card-image" 
  alt="Image" 
  src={card} 
/>
            
    
   <div className="items-start flex flex-col gap-3.5 relative w-[399px]">
<div className="items-start self-stretch flex flex-[0_0_auto] flex-col gap-[3px] relative w-full">
<div className="items-start inline-flex flex-[0_0_auto] gap-2 relative">
<div className=" texttitle">{title}</div>
<div className=" text-[#31302e] text-[10.8px] font-['Heebo'] font-normal tracking-[0] leading-[normal] mt-[-1.00px] relative w-fit">{year} </div>
</div>
<p className=" text-[#31302e] text-[13px] font-['Heebo'] font-normal tracking-[0.78px] leading-[normal] relative w-[350px]">{description}</p>
</div>
<div className="items-center inline-flex flex-[0_0_auto] gap-[22.68px] relative">

      {tags.map((tag, index) => (
    <div key={index} className="items-center inline-flex flex-[0_0_auto] gap-[10.8px] relative">
      <div className="bg-[#31302e] h-[7.29px] relative w-[7.29px] rounded-[3.65px]" />
      <div className="text-[#31302e] text-[11.9px] font-['Heebo'] font-normal tracking-[1.07px] leading-[normal] mt-[-1.08px] relative w-fit">
        {tag}
      </div>
    </div>
  ))}
</div>
</div>

</div>
  </a>
) : (
            <Link to={`/${projectId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="flex flex-col gap-[22px] cursor-none">

          <img 
  className="card-image" 
  alt="Image" 
  src={card} 
/>
            
    
   <div className="items-start flex flex-col gap-3.5 relative w-[399px]">
<div className="items-start self-stretch flex flex-[0_0_auto] flex-col gap-[3px] relative w-full">
<div className="items-start inline-flex flex-[0_0_auto] gap-2 relative">
<div className=" texttitle">{title}</div>
<div className=" text-[#31302e] text-[10.8px] font-['Heebo'] font-normal tracking-[0] leading-[normal] mt-[-1.00px] relative w-fit">{year} </div>
</div>
<p className=" text-[#31302e] text-[13px] font-['Heebo'] font-normal tracking-[0.78px] leading-[normal] relative w-[600px]">{description}</p>
</div>
<div className="items-center inline-flex flex-[0_0_auto] gap-[22.68px] relative">

      {tags.map((tag, index) => (
    <div key={index} className="items-center inline-flex flex-[0_0_auto] gap-[10.8px] relative">
      <div className="bg-[#31302e] h-[7.29px] relative w-[7.29px] rounded-[3.65px]" />
      <div className="text-[#31302e] text-[11.9px] font-['Heebo'] font-normal tracking-[1.07px] leading-[normal] mt-[-1.08px] relative w-fit">
        {tag}
      </div>
    </div>
  ))}
</div>
</div>

</div>
        </Link>
        )}
        </>
    );
}

export default Card;

