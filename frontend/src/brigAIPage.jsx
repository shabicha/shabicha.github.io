import NavBar from "./NavBar";
import brig1 from "/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/brig1.png";
import brig2 from "/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/brig2.png";

import { useEffect } from "react";
import "./orahPage.css";
function BrigAIPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <NavBar />
            <div className="orah-container">
                {/* Header Section */}
                
                <div className="orah-header">
                    <h1 className="orah-title">brig.ai</h1>
                    <p className="brig-subtitle">Predicting the most effective next steps for women with reproductive health issues.</p>
                </div>


                {/* Screenshots Section */}
                <div className="brig-screens">
                   
                        <img className="brigimg1" alt="Orah screen 2" src={brig1} />
                        <img className="brigimg2" alt="Orah screen 3" src={brig2} />
                </div>

                {/* Summary Section */}
                <div className="orah-summary-container">
                    <div className="orah-summary">
                        <h2 className="summary-title">SUMMARY</h2>
                        <p className="summary-description">
                            Innovating against medical gaslighting
                        </p>
                        <p className="summary-text">
                            Women with endometriosis face a {" "}
                            <a
                                href="https://www.york.ac.uk/news-and-events/news/2024/research/diagnosis-endometriosis-delay/#:~:text=Endometriosis%20takes%20an%20average%20of%206.6%20years%20to%20be%20diagnosed,policy%20makers%2C%20the%20researchers%20say"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="summary-link"
                            >
                                7-10 year
                            </a> {" "}
                            diagnostic delay. {" "}
                            <a
                                href="https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="summary-link"
                            >
                                70%
                            </a> {" "} of women with PCOS remain undiagnosed. {" "} 
                            <a
                                href="https://www.miracare.com/blog/medical-gaslighting/#:~:text=In%20our%20research%2C%20we%20learned,ignored%20or%20dismissed%20by%20doctors"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="summary-link"
                            >
                                72%
                            </a>
                            {" "} of female patients reported experiencing medical gaslighting.
                        </p>

                        <p className="summary-text">
                            Through Brig.AI, women+ are able to input their symptoms to find and educate themselves
                            on their most effective diagnostic tests, reducing the gap between symptom and diagnosis.
                        </p>

                    </div>

                    {/* Role, Timeline, and Team Section */}
                    <div className="orah-details">
                        <div className="orah-detail">
                            <h3 className="detail-title">ROLE</h3>
                            <p className="detail-text">Machine Learning Engineer & Product Manager</p>
                        </div>
                        <div className="orah-detail">
                            <h3 className="detail-title">TIMELINE</h3>
                            <p className="detail-text">May - August 2024</p>
                        </div>
                        <div className="orah-detail">
                            <h3 className="detail-title">TEAM</h3>
                            <p className="detail-text">
                                3  Machine Learning Engineers<br />
                                2 Full-Stack Developers<br />
                                1 Product Manager
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BrigAIPage;