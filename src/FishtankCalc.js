import React,{useState} from 'react';
import './FishtankCalc.scss';
import NavBar from './NavBar';
import styled from 'styled-components';
const FishtankCalc = () => {
    const [tankWidth, setTankWidth] = useState(0);
    const [capacity, setCapacity] = useState('내 수조의 용량을 계산해보세요.');
    let TankInput = styled.input`
        width:70px;
        border: solid 1px #8c98a4;
        text-align: center;
    `;

    return(
    <>
        {/* <NavBar /> */}
        <header className="header">
            dosage calculator
        </header>
        <input placeholder="test"/>
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
                        <TankInput type="number" placeholder="만수위까지"/>
                    </div>
                    <div className="flex-box">
                        <span>상세 설정</span>
                        <label className="switch-button">상세설정 Toggle
                        <input type="checkbox" id="checkbox"/>
                        <span className="onoff-switch"></span>
                        </label>
                    </div>
                    <div className="flex-box--func">
                        <input type="button" value="계산"/>
                    </div>
                    <div className="main-secion__calc-capacity">
                        {capacity}
                    </div>
                </div>
            </div>
        </section>
    </>
    )
};

export default FishtankCalc;