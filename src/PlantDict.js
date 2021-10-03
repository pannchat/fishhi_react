import React from 'react'
import styled from 'styled-components';
import NavBar from './NavBar';
import Sun from './img/icons/sun.svg';
import Thermometer from './img/icons/thermometer.svg';
import PhMeter from './img/icons/ph-meter.svg'
import BreedingEnv from './BreedingEnv'
import ShowDetail from './ShowDetail';
import './FishDict.css'
let BreedingEnvContainer = styled.div`
    width:100%;
    overflow:scroll;
    display:flex;
    // 브라우저별 스크롤바 숨기기
    -ms-overflow-style:none; 
    scrollbar-width:none;
    &:: -webkit-scrollbar{
        display:none;
    
    }
    margin:0 0 10px 0;
`;
let BreedingEnvIcons = styled.img`
    width:25px;
    fill:#fff;
`;
let PlantList = {'data':[
    {'id':1, 'species':'아누비아스 바테리','thumbnail':'/img/file/barteri.png','amount_of_light':'보통','min_pH':6.2,'max_pH':7.2,'min_temperature':22,'max_temperature':28, 'description':"아누비아스 바테리는 나이지리아 남동부, 카메룬 및 비오코에서 서식합니다. 잎은 12인치(300mm)까지 자랄 수 있습니다. 아누비아스 바테리는 부분 혹은 완전 잠긴채로 자라고 강한 빛에서 잎이 더 빠르게 자라며 촘촘하게 유지되지만, 낮은 광량에서도 견딜 수 있습니다."},
    // {'id':1, 'species':'아누비아스 바테리','thumbnail':'/img/file/barteri.png','amount_of_light':'보통','min_pH':6.2,'max_pH':7.2,'min_temperature':22,'max_temperature':28, 'description':"아누비아스 핀토는 사람에 의해 개량된 품종입니다. 흰색 녹색 패턴은 특정 부분에 녹색 색소인 엽록소가 부족하여 발생하며, 모든 패턴은 고유합니다. 다른 아누비아스 종에 비해 아누비아스 나나 핀토는 성장속도가 느립니다. 아누비아스 나나 핀토를 건강하고 하얗게 유지하려면 더 높은 강도의 조명을 사용하는 것이 좋습니다. 심을 때 벌브를 묻지 않는 것이 중요하고, 유목이나 돌에 묶여 활착하는 것이 가장 잘 자랍니다."},
]}

let PlantImg = styled.img`
    width:100%;
    padding-bottom:0px ;
`;
let PlantContents = styled.div`
    padding:10px;
`;
let InformSource = styled.div`
    padding:0 10px;
    text-align:right;
    color:#7c838a;
`;

function PlantDict({match}){
    
    const {fid} = match.params;
    let plants = PlantList.data.find(lists => lists.id == fid );

    console.log(plants.species);
    return(
        <>
        <NavBar/>
        <PlantImg src={plants.thumbnail}/>
        <InformSource>출처 : 피쉬하이</InformSource>
        <PlantContents>
        <h2>{plants.species}</h2>
        <ShowDetail contents={plants.description} lineClamp={7}/>
        
        </PlantContents>
        <BreedingEnvContainer>
        <BreedingEnv icon={Sun} property={'광량'} params1={plants.amount_of_light}/>
        <BreedingEnv icon={Thermometer} property={'온도'} params1={plants.min_temperature} params2={plants.max_temperature}/>
        <BreedingEnv icon={PhMeter} property={'pH'} params1={plants.min_pH} params2={plants.max_pH}/>
        </BreedingEnvContainer>
        </>
    );
}

export default PlantDict;