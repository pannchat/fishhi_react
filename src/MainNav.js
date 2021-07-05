import React from 'react';
import styled from 'styled-components';
import './MainNav.css';
import Leaves from "./img/icons/leaves.svg";
import Aquarium from "./img/icons/aquarium.svg";

let NAV_BTN = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin:10px 0;

`;
let NAV_ICON = styled.div`
    border-radius: 10px;
    width:60px;
    height: 60px;
    background-color: ${props => props.color};
    margin:10px 0px;
 `;

let Test = styled.div`
background-color:black;
`;
function MainNav(){
    return(
        <div className="main-nav">

            <NAV_BTN>
                <NAV_ICON color={'#bac5d0'}>    
                    <img className="nav-icons" src={Aquarium}/>
                </NAV_ICON>
                <span>#어항계산기</span>
            </NAV_BTN>
            <NAV_BTN>
                <NAV_ICON color={'#e4e8c6'}>    
                    <img className="nav-icons" src={Leaves}/>
                </NAV_ICON>
                <span>#수초검색</span>
            </NAV_BTN>
            <NAV_BTN>
                <NAV_ICON color={'#bac5d0'}>    
                    <img className="nav-icons" src={Aquarium}/>
                </NAV_ICON>
                <span>#열대어검색</span>
            </NAV_BTN>
            <NAV_BTN>
                <NAV_ICON color={'#bac5d0'}>    
                    <img className="nav-icons" src={Aquarium}/>
                </NAV_ICON>
                <span>#어항관리</span>
            </NAV_BTN>
            
        </div>
        
    )
}

export default MainNav;