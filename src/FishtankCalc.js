import React,{useState,useEffect, useCallback} from 'react';
import './FishtankCalc.scss';
import NavBar from './NavBar';
import styled from 'styled-components';

import ClipboardIcon from './img/icons/clipboard.svg';
let TankInput = styled.input.attrs({
    type:'number'
})`
width:65px;
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
const FishtankCalc = () => {
    useEffect(()=>{
        // if ("serviceWorker" in navigator) {
        //         window.addEventListener("load", () => {
        //             navigator.serviceWorker.register("/service-worker.js");
        //         });
        // }
        // 크롬에서만 pwa 설치버튼 보여주기. 
//     if( (navigator.userAgent).indexOf("Chrome") > -1){
//         document.getElementById("buttonInstall").style.display = 'block';
// }
    })
    const [inputs, setInputs] = useState({
        tankWidth: '',
        tankHeight: '',
        tankDepth: '',
        tankSand: '',
        waterLevel: '',
        thickness: '',
        capacity: '',
        tankWeight: '',
    })
    // const [tankWidth, setTankWidth] = useState(0);
    // const [tankHeight, setTankHeight] = useState(0);
    // const [tankDepth, setTankDepth] = useState(0);
    // const [waterLevel, setWaterLevel] = useState(0);
    // const [thickness, setthickness] = useState(0);

    // const [capacity, setCapacity] = useState('내 수조의 용량을 계산해보세요.');

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
        console.log(inputs)
    }
    const { tankWidth, tankDepth, tankHeight, tankSand, waterLevel,thickness,tankWeight } = inputs;
    const calculator = () =>{

        // 유리두께 값이 있으면 어항 무게를 계산
        if(thickness){
            var x = (((tankWidth*10 * tankHeight * 10 * thickness * 2.5) /1000000) * 2);
            var y = (((tankHeight*10 * ((tankDepth * 10)-thickness*2) * thickness * 2.5) /1000000) * 2);
            var z = ((((tankWidth*10) - thickness*2) * ((tankDepth * 10)-thickness*2) * thickness * 2.5) /1000000);
            var sum = x+y+z;
        }
        let weight = sum ?? '';
        let calcValue = (tankWidth-thickness / 5) * (tankDepth-thickness / 5) * (tankHeight - tankSand - waterLevel - thickness/10)/1000;
        setInputs({
            ...inputs,
            capacity: calcValue,
            tankWeight : weight,
        })
        console.log(inputs)
    }
    
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
                        <TankInput onChange={onChange} name="tankWidth" type="number" placeholder="가로" value={tankWidth} /><div>cm</div>
                        <TankInput onChange={onChange} name="tankDepth" type="number" placeholder="세로" value={tankDepth} /><div>cm</div>
                        <TankInput onChange={onChange} name="tankHeight" type="number" placeholder="높이" value={tankHeight} /><div>cm</div>
                    </div>
                    <div className="main-section__detailed">
                        <TankInput onChange={onChange} name="thickness" type="number" placeholder="유리두께"/><div>T</div>
                        <TankInput onChange={onChange} name="tankSand" type="number" placeholder="바닥재"/><div>cm</div>
                        <TankInput onChange={onChange} name="waterLevel" type="number" placeholder="만수위까지"/><div>cm</div>
                    </div>
                    <div className="flex-box--func">
                        <span>상세 설정</span>
                        <label className="switch-button">상세설정 Toggle
                        <input type="checkbox" id="checkbox"/>
                        <span className="onoff-switch"></span>
                        </label>
                    </div>
                    <div className="flex-box--func">
                        <input id="calc-btn" type="button" value="계산" onClick={()=>{calculator()}}/>
                        <div id="clipboard">
                            <img className="main-section__icons" src={ClipboardIcon} alt="복사 버튼"/>
                            <div data-tooltip-text='링크가 복사되었습니다.' id="tooltip"></div>
                        </div>
                    </div>
                    
                    <div className="main-section__calc-capacity">
                        {inputs.capacity ? (<span>수조의 물 용량은 약 <b>{inputs.capacity.toFixed(2)}L</b><br/></span>) : `내 수조의 용량을 계산해보세요`}
                        {inputs.tankWeight ? (<span>어항의 무게는 약 <b>{inputs.tankWeight.toFixed(2)}kg</b><br/></span>) : ''}
                    </div>
                </div>
            </div>
        </section>
    </>
    )
};

function calc (){

}
export default FishtankCalc;