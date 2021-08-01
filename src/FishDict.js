import React from 'react'
import styled from 'styled-components';
import NavBar from './NavBar';
import Ruler from './img/icons/ruler.svg';
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
let FishList = {'data':[
    {'id':1, 'species':'라쿤 타이거 새우(Caridina sp)','thumbnail':'/img/file/shrimp.jpeg','standard_length':3.5,'min_pH':6.0,'max_pH':7.5,'min_temperature':22,'max_temperature':26, 'description':"라쿤 타이거 새우는 베트남에서 발견된 새우이며, 식육목 아메리카 너구리과 포유류에 속하는 '라쿤 (Racoon)' 의 무늬를 닮았다고 하여 라쿤 타이거 새우라고 이름 지어졌습니다.\n\n2016년 4월, 국내로 수입되어 들어온 개체를 입양한 뒤로 지금까지 철저한 관리 하에 혈통을 이어오고 있는 새우입니다. 수입 당시 판매처에서 '비슈림프과' 라는 틀린 표현을 사용하여 표기하였으나 라쿤 타이거 새우는 이들 새우들과 전혀 상관 없는 새우입니다. 또한 수입 당시 레드비나 타이거 등과 같은 Caridina serrata 종군의 새우들과 교잡이 된다는 정보를 기재하두었으나 이 정보 역시 사실이 아니며 Caridina serrata 종군에 속한 그 어떤 새우와도 교잡이 되지 않습니다.\n\n라쿤 타이거 새우는 레드비나 쉐도우 비슈림프, 오렌지 타이거, 아우라 블루, 세줄 새우 및 갤럭시 피쉬본 같은 타이완 갤럭시 핀토와 같은 Caridina속에 속하는 새우는 맞으나 종이 다릅니다. 아직 정확하게 어떠한 종에 속하는지는 알려지지 않았으며, 지금까지 알려진 그 어떠한 종의 Caridina속 새우들과 교잡이 되지 않는 것을 미루어보아 새로운 종이 아닐까 추측하고 있습니다. 그렇기에 학명은 Caridina sp. 로 기재하고 있습니다. 라쿤 새우와 관련된 연구가 크게 이루어지고 있지 않아서 아직까지도 Caridina속이 맞는가에 대한 의문도 제대로 해결되지 못한 미확인 종입니다.\n\nCaridina속과 Neocaridina속에 속한 그 어떤 새우와도 교잡이 되지 않기 때문에 다른 관상 새우와 합사하여 사육하여도 전혀 문제가 없습니다. 그렇기 때문에 다양한 새우들을 섞어서 키우기에는 라쿤 타이거 새우만큼 좋은 새우도 없을 것으로 생각됩니다.\n\n기본적인 생김새는 맑고 투명한 몸통에 검은색 내지 갈색의 줄무늬가 가있으며, 몸통을 자세히 관찰하면 자잘한 점 (정확하게는 색소포) 이 분포되어 있는 모습을 볼 수 있습니다. 슈림피스트 혈통의 라쿤 타이거 새우는 무늬의 넓이가 상대적으로 넓은 개체들이 종종 출현하며, 몸통의 발색이 푸르스름한 개체들도 가끔 태어난다는 점이 특징입니다. 이는 위에 첨부해둔 동영상에서 관찰이 가능하니 참고 부탁드립니다.\n\n무늬의 색상과 넓이, 그리고 몸통 발색이 다양하게 나타나기 때문에 무늬의 넓이는 넓이거나 특이한 발색을 가진 형태로 개량할 수 있는 여지가 있는 새우이며, 슈림피스트에서도 이와 같은 품종개량을 진행하고 있습니다.\n\n매우 튼튼하고 환경 적응력이 뛰어난 종으로, Caridina속에 속한 관상새우들이 선호하는 약산성의 수질부터 Neocardina속 관상새우들이 선호하는 중성~약알칼리성 수질까지 두루 쉽게 적응하며 건강하게 살아갑니다. 또한 먹성이 매우 왕성하고 건강하여 질병에 쉽게 걸리지 않기 때문에 수온만 적절하다면 번식 역시 상당히 쉽습니다.\n\n 그 어떠한 종과도 교잡이 되지 않기 때문에 교잡 걱정 없이 다양한 종의 새우와 합사하여 관상할 수 있다는 장점과 더불어, 수수한 모습 및 뛰어난 수질 적응력 때문에 이산화탄소를 사용하여 수질 변화가 클 여지가 있는 스케이핑 수조에 최적인 새우입니다."},
    {'id':2, 'species':'오렌지 타이거 새우 (Orange tiger shrimp, Tangerine tiger shrimp)','thumbnail':'https://shop-phinf.pstatic.net/20210302_220/1614623276313Flvph_JPEG/IMG_E7938.JPG?type=w860','standard_length':3.5,'min_pH':6.0,'max_pH':7.5,'min_temperature':22,'max_temperature':26, 'description':"2015년 4월, 국내로 수입되어 들어온 개체를 입양하였으며 그 이후로 타종과의 교잡 없이 혈통을 이어오고 있는 순종 '점박이 새우 (Caridina cantonensis)'의 한 모프입니다. 다른 모프로는 '아우라블루' 가 있으며, 국내에 수입된 적이 없는 '붉은 점박이 (Red Tupfel)' 가 있습니다. 오랜기간 교잡이 되지 않도록 철저하게 관리해온 점박이 새우 순종으로, 노란색에서 짙은 오렌지색 까지 다양한 색감을 지니고 있습니다. 또한 바닥재 색상에 따라서도 발색이 조금씩 달라지는 특성을 갖고 있습니다. *점박이 새우 : 외국에서는 Caridina cantonensis 새우를 'Tüpfel shrmp' 로 부르고 있으며, 이를 번역하면 '점이 찍힌 새우' 라는 뜻이기 때문에, 이를 저희가 편의상 '점박이 새우'로 표현하게 되었습니다. 공식적인 표현은 아니며, 유통 과정에서의 편의상 붙인 명칭이니 혼동이 없으시길 바랍니다. ​"}
]}

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
        <ShowDetail contents={test.description} lineClamp={7}/>
        
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