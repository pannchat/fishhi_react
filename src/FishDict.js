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
    {'id':2, 'species':'오렌지 타이거 새우 (Orange tiger shrimp, Tangerine tiger shrimp)','thumbnail':'https://shop-phinf.pstatic.net/20210302_220/1614623276313Flvph_JPEG/IMG_E7938.JPG?type=w860','standard_length':3.5,'min_pH':6.0,'max_pH':7.5,'min_temperature':22,'max_temperature':26, 'description':"2015년 4월, 국내로 수입되어 들어온 개체를 입양하였으며 그 이후로 타종과의 교잡 없이 혈통을 이어오고 있는 순종 '점박이 새우 (Caridina cantonensis)'의 한 모프입니다. 다른 모프로는 '아우라블루' 가 있으며, 국내에 수입된 적이 없는 '붉은 점박이 (Red Tupfel)' 가 있습니다. 오랜기간 교잡이 되지 않도록 철저하게 관리해온 점박이 새우 순종으로, 노란색에서 짙은 오렌지색 까지 다양한 색감을 지니고 있습니다. 또한 바닥재 색상에 따라서도 발색이 조금씩 달라지는 특성을 갖고 있습니다. *점박이 새우 : 외국에서는 Caridina cantonensis 새우를 'Tüpfel shrmp' 로 부르고 있으며, 이를 번역하면 '점이 찍힌 새우' 라는 뜻이기 때문에, 이를 저희가 편의상 '점박이 새우'로 표현하게 되었습니다. 공식적인 표현은 아니며, 유통 과정에서의 편의상 붙인 명칭이니 혼동이 없으시길 바랍니다. ​"},
    {'id':3, 'species':'크리스탈 화이트 새우 (Caridina logemanni)','thumbnail':'https://shop-phinf.pstatic.net/20210503_98/16199749378002ylXj_JPEG/21110721459274346_1000788430.JPG?type=m510','standard_length':3.5,'min_pH':6.0,'max_pH':7.5,'min_temperature':22,'max_temperature':26, 'description':"크리스탈 화이트 새우 (Crystal white shrimp, 해외에서는 줄여서 CWS 라고 부르기도 합니다) 는 야생 비슈림프에서 개량된 순수 비슈림프라고 알려져 있습니다. 일반적인 크리스탈 레드 새우 (=레드 비 새우) 또는 크리스탈 블랙 새우 ( =블랙 비 새우) 와 같이 개량 과정에서 잡종새우인 골든 비 새우 등이 섞여 들어가지 않았기 때문에 수생 무척추동물과 관련된 해외 여러 잡지 및 문헌에서도 크리스탈 화이트 새우는 야생 비슈림프와 같은 학명인 Caridina logemanni 를 사용하고 있는 것으로 확인이 됩니다. \n\n​\n\n 크리스탈 화이트 새우는 비슈림프에서 흰색을 제외한 나머지 색소포 발현이 억제된 모프라고 볼 수 있으며, 이렇게 흰색의 색소포만 살아남고 나머지 유색의 색소포 발현이 억제되는 것을 '고스트 효과 (Ghost effect)' 라고 부르기도 합니다. 이러한 고스트 효과는 슈림피스트 자체 교잡 결과 Caridina cantonensis 의 품종 중 하나인 '아우라 블루 새우' 와 Caridina mariae의 품종 중 하나인 '오렌지 아이 블랙 다이아몬드 새우' 간의 교잡 개체에서도 발견이 되었던 적이 있습니다. 해외에서도 교잡 개체에서 아주 희박하게 고스트 효과를 보았다는 보고도 있으며, 이를 말미암아 크리스탈 화이트 새우도 비슈림프 개량 과정에서 탄생한 교잡의 산물이라고 보는 견해도 있습니다. 하지만 크리스탈 화이트 새우의 하얀색 무늬의 형태와 위치가 야생의 비슈림프와 매우 흡사하거나 같다는 점과 비슈림프를 이용한 교잡이 빈번하게 일어나던 시기 이전부터 존재했다는 점 등, 정황상 순수한 비슈림프 혈통의 개량 품종으로 보는 의견이 지배적입니다. \n\n​\n\n 이름에서도 알 수 있듯이 비슈림프가 한창 개량되던 시기, 그러니까 야생의 비 새우에서 붉은색의 변이 개체가 탄생하고 크리스탈 레드 비 새우라고 이름붙여지고 본격적으로 비슈림프의 개량이 일어나던 시기에 탄생한 하얀색 비슈림프 개체였기에 다른 종류의 하얀색 새우와는 다르게 '크리스탈'이라는 접두어가 쓰였습니다. 그래서 그 당시에는 통칭 '화이트 비 새우'라고 불렸으나, 이후 크리스탈 레드 비 새우의 개량을 위해 또 다른 하얀색 새우인 '골든 비 새우', '스노우 화이트 비 새우'가 논란의 중심이 되고 화두가 되면서 점차 이들 새우들이 '화이트 비 새우'로 불리게 되었고 결국 이름을 빼앗기게 되었습니다. \n\n 국내에서는 구분 없이 하얀색 류의 새우라면 모두 '화이트비'라고 통칭하나, 사실은 '골든 비 새우''와 '스노우 화이트 비 새우'로 나뉘며 실제로 발색부터 다르기 때문에 쉽게 구분이 가능합니다. 아무튼 이렇게 화이트 비 새우라는 이름을 빼앗긴 뒤부터 이들 새우들과 구분을 짓기 위해 '고스트'라는 접두어를 사용하여 '고스트 화이트 비 새우'라고 불리게 되었으나, 전통적으로는 '크리스탈 화이트 새우'라는 명칭이 쓰였기 때문에 품종명에 같이 기입해두게 되었습니다. \n\n​\n\n 크리스탈 화이트 새우는 국내에서 불리는 화이트 비 새우 (이하 편의상 '골든 비 새우'와 '스노우 화이트 비 새우'를 합쳐서 '화이트 비 새우'라고 부르겠습니다) 와는 다르게 매우 순수한 흰 발색을 가졌으며, 흰색을 제외한 나머지 색소포의 발현이 억제되는 고스트 효과 때문에 알의 색상 역시 반투명한 흰색 내지 연한 민트빛의 흰색을 띠고 있습니다. 화이트 비 새우의 경우 알의 색상이 타이거나 비슈림프와 같은 주황색 내지 오렌지색이기 때문에 단순히 알의 색상만으로도 구분이 가능합니다. \n\n​\n\n 이러한 고스트 효과는 같은 고스트 효과가 발현된 개체 간의 교배/교잡만을 통해 유지가 가능하며, 고스트 효과를 발현시키는 형질을 가지지 않은 타 품종과 교잡할 경우 그 첫 번째 후대는 고스트 효과를 잃어버리게 됩니다. 물론 이렇게 얻어진 후대를 근친교배할 경우 F2 부터 희박한 확률로 고스트 효과를 가진 개체가 탄생할 가능성은 있다고 판단됩니다만 아직 정확하게 확인된 실 사례는 찾아보지 못하였으며, 현재 슈림피스트에서 확인 작업을 진행하고 있습니다 (고스트 피쉬본 같은 품종이 존재하는 것을 보면 가능하다고 생각됩니다). \n\n​\n\n e.g. 슈림피스트에서 브리딩 중인 크리스탈 레드 비 새우와 크리스탈 화이트 새우를 교잡한 결과, 첫 번째 후대는 원종 비슈림프에 가까운 그레이드를 가진 크리스탈 레드 비 새우만이 나왔고 현재 이들은 근친교배하여 얻은 두 번째 후대가 자라나고 있습니다. 고스트 효과가 발현되는 개체가 나온다면 해당 내용은 업데이트하도록 하겠습니다.\n\n \n\n 비슈림프의 한 모프이기 때문에 Caridina serrata 종군에 포함된 모든 새우와 교잡이 가능합니다. 따라서 교잡이 되는 것을 원치 않으신다면 단독 사육 및, 이들과 교잡이 되지 않는 Neocaridina 속의 새우 또는 라쿤 타이거 새우 (Caridina sp.) 와 같은 새우와 합사하여 사육하는 것이 좋습니다. \n\n​\n\n Neocaridina palmata 에 속하는 개량 품종인 '스노우볼 새우' 와 매우 흡사한 외형을 가졌지만, 스노우볼 새우가 가지고 있지 않은 하얀색 줄무늬가 예쁜 새우입니다. \n\n 크리스탈 화이트 새우의 하얀색 패턴은 개체마다 조금씩 그 형태나 넓이, 위치가 다를 수 있으며, 수질 변화 및 개체 건강 상태에 따라서 연해 지기도 (거의 사라지다시피 한 수준으로) 하고 진해지기도 하니 진한 하얀색 패턴을 꾸준히 유지하고 싶으시다면 최소한 pH 6.0~6.5 의 약산성 수질을 유지해 주시는 것이 좋습니다. 수질 변화에 강한 튼튼한 품종이기 때문에 사육 난이도는 낮은 편이며, 조건만 잘 맞는다면 투명한 몸통 특성상 실시간으로 암컷 개체의 난소에 알이 형성되는 것을 확인 가능한 점이 특히 매력적인 품종입니다.​"}
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