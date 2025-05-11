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
        
                        <div className="textgroup">
                            <div className="div-2">
                                <div className="project-card">
                                    <div className="project-header">
                                        <div className="project-title">{title}</div>
                                        <p className="project-subtitle">{description}</p>
                                    </div>
                                    <div className="project-tags">
                                        <span className="tag">Product Design</span>
                                        <span className="tag">Front-End</span>
                                    </div>
                                </div>

                            </div>

                        </div>
            </div>
        </div>
            
    
       
        </Link>
        </>
    );
}

export default Card;

