import React from 'react'
import styled from 'styled-components';
import NavBar from './NavBar';
import Ruler from './img/icons/ruler.svg';
import Thermometer from './img/icons/thermometer.svg';
import PhMeter from './img/icons/ph-meter.svg'
import BreedingEnv from './BreedingEnv'
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
`;
let BreedingEnvIcons = styled.img`
    width:25px;
    fill:#fff;
`;
let FishList = {'data':[
    {'id':1, 'species':'라쿤 타이거 새우(Caridina sp)','thumbnail':'/img/file/shrimp.jpeg','standard_length':3.5,'min_pH':6.0,'max_pH':7.5,'min_temperature':22,'max_temperature':26, 'description':"라쿤 타이거 새우는 베트남에서 발견된 새우이며, 식육목 아메리카 너구리과 포유류에 속하는 '라쿤 (Racoon)' 의 무늬를 닮았다고 하여 라쿤 타이거 새우라고 이름 지어졌습니다."}
]};
let FishImg = styled.img`
    width:100%;
    padding:10px 0;
`;
let FishContents = styled.div`
    padding:10px;
`;
let InformSource = styled.div`
    padding:0 10px;
    text-align:right;
    color:#7c838a;
`;
function FishDict({match}){
    
    const {fid} = match.params;
    let test = FishList.data.find(lists => lists.id == fid );
    console.log(test.species);
    return(
        <>
        <NavBar/>
        <FishImg src={test.thumbnail}/>
        <InformSource>출처 : 슈림피스트</InformSource>
        <FishContents>
        <h2>{test.species}</h2>
        <p>{test.description}</p>
        
        {/* <BreedingEnvBox>
            <BreedingEnvIcons src={Ruler}/>
            <div className="breeding-env-box">
                <div className="breeding-evn-box__property">길이</div>
                <div className="breeding-evn-box__value">{test.standard_length}</div>
            </div>
        </BreedingEnvBox>
        <BreedingEnvBox>
            <BreedingEnvIcons src={Ruler}/>
            <div className="breeding-env-box">
                <div className="breeding-evn-box__property">길이</div>
                <div className="breeding-evn-box__value">{test.standard_length}</div>
            </div>
        </BreedingEnvBox> */}
        </FishContents>
        <BreedingEnvContainer>
        <BreedingEnv icon={Ruler} property={'길이'} params1={test.standard_length}/>
        <BreedingEnv icon={Thermometer} property={'온도'} params1={test.min_temperature} params2={test.max_temperature}/>
        <BreedingEnv icon={PhMeter} property={'pH'} params1={test.min_pH} params2={test.max_pH}/>
        </BreedingEnvContainer>
        </>
    );
}

export default FishDict;