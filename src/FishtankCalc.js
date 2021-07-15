import React,{useState} from 'react';
import './FishtankCalc.scss';
import NavBar from './NavBar';
import styled from 'styled-components';

import ClipboardIcon from './img/icons/clipboard.svg';
const FishtankCalc = () => {
    const [tankWidth, setTankWidth] = useState(0);
    const [capacity, setCapacity] = useState('내 수조의 용량을 계산해보세요.');
    let TankInput = styled.input`
        width:70px;
        border: solid 1px #8c98a4;
        text-align: center;
        // 위아래 버튼없애기
        &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button{
                -webkit-appearance: none;
                margin: 0;
            }
        &+div{
                display:inline-block;
                width:16px;
                padding: 0 2px;
                vertical-align: bottom;
                font-size:0.7rem;
        }
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
                        <TankInput type="number" placeholder="가로"/><div>cm</div>
                        <TankInput type="number" placeholder="세로"/><div>cm</div>
                        <TankInput type="number" placeholder="높이"/><div>cm</div>
                    </div>
                    <div className="main-section__detailed">
                        <TankInput type="number" placeholder="유리두께"/><div>T</div>
                        <TankInput type="number" placeholder="바닥재"/><div>cm</div>
                        <TankInput type="number" placeholder="만수위까지"/><div>cm</div>
                    </div>
                    <div className="flex-box--func">
                        <span>상세 설정</span>
                        <label className="switch-button">상세설정 Toggle
                        <input type="checkbox" id="checkbox"/>
                        <span className="onoff-switch"></span>
                        </label>
                    </div>
                    <div className="flex-box--func">
                        <input id="calc-btn" type="button" value="계산"/>
                        <div id="clipboard">
                            <img className="main-section__icons" src={ClipboardIcon} alt="복사 버튼"/>
                            <div data-tooltip-text='링크가 복사되었습니다.' id="tooltip"></div>
                        </div>
                    </div>
                    
                    <div className="main-section__calc-capacity">
                        {capacity}
                    </div>
                </div>
            </div>
        </section>
    </>
    )
};

export default FishtankCalc;