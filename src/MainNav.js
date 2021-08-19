import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import './MainNav.css';
import Leaves from "./img/icons/leaves.svg";
import Aquarium from "./img/icons/aquarium.svg";
import Fish from "./img/icons/012-fish.svg"
import AquaManage from "./img/icons/002-aquarium.svg"
import AquaCalc from "./img/icons/017-aquarium.svg"
import AquaPlant from "./img/icons/030-plant.svg"
let NAV_BTN = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin:10px 0;

`;
let NavIconBox = styled.div`
    border-radius: 10px;
    width:60px;
    height: 60px;
    background-color: ${props => props.color};
    margin:10px 0px;
 `;

let Test = styled.div`
background-color:black;
`;
let NavIcons = styled.img`
    width:${props => props.size ?? '40px'};
    height${props => props.size ?? '40px'};
    position: relative;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
`;
function MainNav(){
    return(
        <div className="main-nav">
            
            <NAV_BTN>
                <Link to="/calc" className="flex-box">
                    <NavIconBox color={'#EFF2C6'}>    
                        <NavIcons size={'40px'} src={AquaCalc}/>
                    </NavIconBox>
                    <span>#어항계산기</span>
                </Link>
            </NAV_BTN>

            <NAV_BTN>
            <Link to="/dic" className="flex-box">
                <NavIconBox color={'#e6fcf5'}>    
                    <NavIcons size={'40px'} src={AquaPlant}/>
                </NavIconBox>
                <span>#준비중</span>
                </Link>
            </NAV_BTN>
            <Link to="/login" className="flex-box">
            <NAV_BTN>
                <NavIconBox color={'#fff4e6'}>    
                    <NavIcons src={Fish}/>
                </NavIconBox>
                <span>#준비중</span>
            </NAV_BTN>
            </Link>
            <NAV_BTN>
                <Link to="/login" className="flex-box">
                    <NavIconBox color={'#f1f3f5'}>    
                        <NavIcons src={AquaManage}/>
                    </NavIconBox>
                    <span>#어항관리</span>
                </Link>
            </NAV_BTN>
            
        </div>
        
    )
}

export default MainNav;