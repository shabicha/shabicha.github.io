/* eslint-disable react/prop-types */
import './Card.css';
import { Link } from 'react-router-dom';


function Card({ image1, image2, title, description, projectId }) {
    return (
        <>
            <Link to={`/${projectId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='full-card-struc cursor-none'>
                    <div className="group">
                        <img className="imageLaptop" alt="Image" src={image1} />
                        <img className="imgLaptop" alt="Image" src={image2} />
                    
                        <div className="textgroup">
                        <div className="div-2">
                                <div className="project-card">
                                    <div className="project-header">
                                        <div className="project-title">{title}</div>
                                        <p className="project-subtitle">{description}</p>
                                    </div>
                                    <div className="project-tags">
                                        <span className="tag">Machine Learning</span>
                                        <span className="tag">Product Strategy</span>
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