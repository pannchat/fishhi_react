import React from 'react';
import './FishtankCalc.scss';
import NavBar from './NavBar';
const FishtankCalc = () => {
    return(
    <>
        <NavBar />
        <header className="header">
            dosage calculator
        </header>
        <section className="main-section">
            <div className="flex-box--main">
                <div className="main-section__tank-preview">
                    <div className="main_section__tank-container">
                        <div className="main_section__tank">
                        <div className="face" id="front"><b>fishhi.kr</b></div>
                        <div className="face" id="back"></div>
                        <div className="face" id="left"></div>
                        <div className="face" id="right"></div>
                        <div className="face" id="top"></div>
                        <div className="face" id="bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
};

export default FishtankCalc;