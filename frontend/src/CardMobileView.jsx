/* eslint-disable react/prop-types */
import './Card.css';
import { Link } from 'react-router-dom';


function Card({ image1, image2, title, role, description, projectId }) {
    return (
        <>
            <Link to={`/${projectId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
           <div className='full-card-struc'> 
        <div className="group">
            <img className="image" alt="Image" src={image1} />
            <img className="img" alt="Image" src={image2} />
        </div>
                <div className="div">
                    <div className="div-2">
                        <div className="text-wrapper">{title}</div>
                        <div className="text-wrapper-2">{role}</div>
                    </div>
                    <p className="p">
                        {description}
                    </p>
                </div>
            </div>
            
    
       
        </Link>
        </>
    );
}

export default Card;

