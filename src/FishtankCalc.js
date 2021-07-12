import React,{useState} from 'react';
import './FishtankCalc.scss';
import NavBar from './NavBar';
import styled from 'styled-components';
const FishtankCalc = () => {
    const [tankWidth, setTankWidth] = useState(0);

    let TankInput = styled.input`
        width:70px;
        border: solid 1px #8c98a4;
        text-align: center;
    `;

    return(
    <>
        <NavBar />
        <header className="header">
            dosage calculator
        </header>
        <section className="main-section">
            <div className="flex-box--main">
                <div className="main-section__tank-preview">
                    <div className="main-section__tank-container">
                        <div className="main-section__tank">
                            <div className="face" id="front"><b>fishhi.kr</b></div>
                            <div className="face" id="back"></div>
                            <div className="face" id="left"></div>
                            <div className="face" id="right"></div>
                            <div className="face" id="top"></div>
                            <div className="face" id="bottom"></div>
                        </div>
                    </div>
                    <div className="main-section__tank-size">
                        <TankInput type="number" placeholder="가로"/>
                        <TankInput type="number" placeholder="세로"/>
                        <TankInput type="number" placeholder="높이"/>
                    </div>
                    <div className="main-section__detailed">
                        <TankInput type="number" placeholder="유리두께"/>
                        <TankInput type="number" placeholder="바닥재"/>
                        <TankInput placeholder="만수위까지"/>
                        <input placeholder="만수위까지"/>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
};

export default FishtankCalc;