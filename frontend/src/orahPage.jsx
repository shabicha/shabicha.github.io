import NavBar from "./NavBar";
import orah3 from "./assets/orah3.png";
import orah2 from "./assets/orah2.png";
import orah4 from "./assets/orah4.png";
import orah5 from "./assets/orah5.png";
import "./orahPage.css";
import { useEffect } from "react";

function OrahPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <NavBar />
            <div className="orah-container">
                {/* Header Section */}
                <div className="orah-header">
                    <h1 className="orah-title">orah</h1>
                    <p className="orah-subtitle">Gamifying screen-time reduction</p>
                </div>

                {/* Screenshots Section */}
                <div className="orah-screens">
                    <div className="orah-images-wrapper">
                    <img className="orah-image" alt="Orah screen 1" src={orah2} />
                    <img className="orah-image" alt="Orah screen 2" src={orah3} />
                    <img className="orah-image" alt="Orah screen 3" src={orah4} />
                    <img className="orah-image" alt="Orah screen 3" src={orah5} />
                    </div>
                </div>

                {/* Summary Section */}
                <div className="orah-summary-container">
                    <div className="orah-summary">
                        <h2 className="summary-title">SUMMARY</h2>
                        <p className="summary-description">
                            Creating an effective screentime management app
                        </p>
                        <p className="summary-text">
                            
                            <a
                                href="https://www2.deloitte.com/us/en/insights/industry/telecommunications/connectivity-mobile-trends-survey.html"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="summary-link"
                            >
                                53%
                            </a>{" "}
                             of young Americans struggle to limit their screen
                            time to a comfortable level.
                        </p>
                        <p className="summary-text">
                            As a team, our mission was to design a mobile app that
                            gamifies screen time management by enabling users to earn
                            redeemable points upon reaching their screen time goals.
                        </p>
                    </div>

                    {/* Role, Timeline, and Team Section */}
                    <div className="orah-details">
                        <div className="orah-detail">
                            <h3 className="detail-title">ROLE</h3>
                            <p className="detail-text">Lead Product Designer</p>
                        </div>
                        <div className="orah-detail">
                            <h3 className="detail-title">TIMELINE</h3>
                            <p className="detail-text">April 2023 - March 2024</p>
                        </div>
                        <div className="orah-detail">
                            <h3 className="detail-title">TEAM</h3>
                            <p className="detail-text">
                                3 Business Analysts<br />
                                3 Developers<br />
                                2 Product Designers<br />
                                1 Product Manager
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrahPage;

