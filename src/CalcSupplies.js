import React,{useEffect,useState} from 'react';
import axios from 'axios';

const CalcSupplies = ({capacity, tankWeight}) =>{
    const [suppList, setSuppList] = useState([]); 
    useEffect(()=>{

        axios.get('https://fishhi.kr/supplies_product.json')
        .then((data) =>{
            setSuppList(data.data.item);


        });

    },[])
    console.log(suppList);
    const liElement = suppList.map( (el,idx) => (
        <li class="search-list" key={idx}>
        <img src={`https://fishhi.kr/thumbnails/${el.img}`} className="supplies-product-img" alt={`${el.productName} 상품`} />
        <div >
            <p >{el.productName}</p>
            권장 사용량 : {el.recommendedUsage1}L 당 {el.recommendedUsage2}cc<br/>
            내 어항 사용량 : <b>{capacity? `${(capacity/el.recommendedUsage1*el.recommendedUsage2).toFixed(2)}cc`:'?'}</b> 권장<br />
            <a className="open">상세 설명서 보기</a>
        </div>
        </li>
    ))
    return(
        <>
            {liElement}
            
        </>
    )
}

export default React.memo(CalcSupplies);