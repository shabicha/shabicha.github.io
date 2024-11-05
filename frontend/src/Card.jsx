/* eslint-disable react/prop-types */
import './Card.css';

function Card({ image1, image2, title, role, description }) {
    return (
        <> 
           <div className='full-card-struc'> 
        <div className="group">
            <img className="image" alt="Image" src={image1} />
            <img className="img" alt="Image" src={image2} />
        </div>
                <div className="div">
                    <div className="div-2">
                        <div className="text-wrapper">orah</div>
                        <div className="text-wrapper-2">Product Designer</div>
                    </div>
                    <p className="p">
                        Gamifying screen-time reduction by stimulating local economies.
                    </p>
                </div>
            </div>
            
    
       
        </>
    );
}

export default Card;

