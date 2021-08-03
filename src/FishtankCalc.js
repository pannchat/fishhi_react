import React,{useState,useEffect, useCallback} from 'react';
import './FishtankCalc.scss';
import NavBar from './NavBar';
import styled from 'styled-components';
import CalcSupplies from './CalcSupplies';
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
    const [warning, setWarning] = useState(0);
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
    const validation = () =>{
        
        if (warning > 5){
            alert("그만 괴롭혀주세요 " + '🤬'.repeat(warning));
            setWarning(0);
            return false;
        }
        if(Math.min(tankWidth,tankDepth,tankHeight,tankSand,waterLevel,tankWeight) < 0){
            alert("ㅎㅎ😡");
            setWarning(warning+1);
            return false;
        }else if (tankWidth > tankDepth*100 || tankWidth > tankHeight*100 ||  tankDepth > tankWidth*100 || tankDepth > tankHeight*100 || tankHeight > tankDepth*100 || tankHeight > tankWidth*100){
            alert("이런 어항이 어딨어요 😮‍💨");
            return false;
        }else if(Math.max(tankWidth,tankDepth,tankHeight,tankSand,waterLevel,tankWeight) > 10000){
            alert("ㅎㅎ바다속에 사세요?🎣");
            return false;
        }else if( tankSand > tankHeight || waterLevel > tankHeight || parseInt(tankSand)+parseInt(waterLevel) > tankHeight){
            alert("이상한 값 멈춰!🖐🖐🖐 ");
            return false; 
        }
        return true;
    }
    const calculator = () =>{
        if (!validation()) return;
        // 유리두께 값이 있으면 어항 무게를 계산
        calc(tankWidth,tankHeight,tankDepth,tankSand,waterLevel);

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
                <ul className="flex-box" id="search-container">
                <CalcSupplies capacity={inputs.capacity} tankWeight={inputs.tankWeight} />
            </ul>
            </div>

        </section>

    </>
    )
};

function calc (tankWidth2,tankHeight2,tankDepth2,tankSand2,waterLevel2){
    var s=100;
    var min = Math.min(tankWidth2,tankDepth2,tankHeight2)
    console.log(min)
    var tankWidth = (tankWidth2/min)*s;
    var tankHeight = (tankHeight2/min)*s;
    var tankDepth = (tankDepth2/min)*s;
    var tankSand = (tankSand2/min)*s;
    var waterLevel = (waterLevel2/min)*s
    if(Math.max(tankWidth,tankDepth,tankHeight)>200){
        var scale = 200/Math.max(tankWidth,tankDepth,tankHeight);
        tankWidth *= scale;
        tankDepth *= scale;
        tankHeight *= scale;
        tankSand *= scale;
        waterLevel *= scale;
    }

    var front = document.getElementById("front");
    var back = document.getElementById("back");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var top = document.getElementById("top");
    var bottom = document.getElementById("bottom");
    var checkbox = document.getElementById("checkbox");
    var tankArr = [front,back,left,right,top,bottom]
    for (const key in tankArr){
        tankArr[key].innerHTML = "";
    }
    if (tankSand != ""){
        

        var sand =`<div style='width:100%; height:${tankSand}px;position:absolute;bottom:0;background-color:rgba(150, 96, 29, 0.714);margin:0px'></div>`;
        front.innerHTML = sand;

        left.innerHTML = sand;
        right.innerHTML=sand;
        back.innerHTML = `<div style='width:100%; height:${tankSand}px;position:absolute;top:0;background-color:rgba(150, 96, 29, 0.714);margin:0px'></div>`;

        
    }
    if (waterLevel != ""){

        var sand =`<div style='width:100%; height:${waterLevel}px;position:absolute;top:0;background-color:rgba(255, 255, 255, 0.714);margin:0px'></div>`;
        front.innerHTML += sand;
        left.innerHTML += sand;
        right.innerHTML += sand;
        back.innerHTML += `<div style='width:100%; height:${waterLevel}px;position:absolute;bottom:0;background-color:rgba(255, 255, 255, 0.714);margin:0px'></div>`;
        
    }

    var banner = document.createElement("b");
    var textNode = document.createTextNode("fishhi.kr");
    banner.setAttribute("style","color:whitesmoke");
    banner.appendChild(textNode);
    front.appendChild(banner);
    
    front.style.width = tankWidth + 'px';
    front.style.height = tankHeight + 'px';
    front.style.transform = '';
    front.style.transform = 'translateZ(' + (tankDepth/2) +'px)';
    back.style.width = tankWidth + 'px';
    back.style.transform = 'rotate(-180deg) translateZ(' + -(tankDepth/2) +'px)';
    back.style.height = tankHeight + 'px';
    left.style.width = tankDepth + 'px';
    left.style.transform = 'translateX(' + -((tankDepth/2)) +'px) rotateY(90deg)';
    // left.setAttribute("transform",`translateX(-${tankDepth}px) rotateY(190deg)`);
    left.style.height = tankHeight + 'px';
    right.style.width = tankDepth + 'px';
    right.style.height = tankHeight + 'px';
    right.style.transform = 'translateX(' +  (tankWidth - tankDepth + tankDepth/2) +'px) rotateY(90deg)';
    top.style.width = tankWidth + 'px';
    top.style.height = tankDepth + 'px';
    top.style.transform = 'translateY(' + -(tankDepth/2) + 'px) rotateX(90deg)';
    bottom.style.width = tankWidth + 'px';
    bottom.style.height = tankDepth + 'px';
    bottom.style.transform = 'translateY(' + (tankHeight - tankDepth + tankDepth/2) + 'px) rotateX(90deg)';

    var containerWidth = document.querySelector('.main-section__tank-container').clientWidth;
    var containerHeight = document.querySelector('.main-section__tank-container').clientHeight;
    var face = document.querySelectorAll('.face');

    // 수조 가운데 정렬

    face.forEach(
        (el) =>{
            if(tankWidth>tankDepth){
                el.style.left = (containerWidth/2) - (front.clientWidth/2) + "px";
            }
            else if(tankWidth<tankDepth){
                el.style.left = (containerWidth - Math.min(front.clientWidth,right.clientWidth))/2 + "px";
            }
            else{
                el.style.left = (containerWidth - Math.min(front.clientWidth,right.clientWidth))/2 + "px";
            }
            
            el.style.top = (containerHeight -front.clientHeight)/2 + "px";
        }
        
        );
}
export default FishtankCalc;