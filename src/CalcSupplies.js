import React,{useEffect,useState} from 'react';
import {useGetSuppliesProduct}  from './shared/hooks/useGetSuppliesProduct';
import styled from 'styled-components';
const CalcSupplies = ({capacity, tankWeight}) =>{
    const { data } = useGetSuppliesProduct();
    const [toggle, setToggle] = useState(false);
    useEffect(()=>{

        // axios.get('https://fishhi.kr/supplies_product.json')
        // .then((data) =>{
        //     setSuppList(data.data.item);


        // });

    },[])


    const liElement = (data) => data?.map((el,idx) => (
        <li className="search-list" key={`searchList${idx}`}>
        <img src={`https://fishhi.kr/thumbnails/${el.img}`} className="supplies-product-img" alt={`${el.productName} 상품`} />
        <div >
            <p >{el.productName}</p>
            권장 사용량 : {el.recommendedUsage1}L 당 {el.recommendedUsage2}cc<br/>
            내 어항 사용량 : <b>{capacity? `${(capacity/el.recommendedUsage1*el.recommendedUsage2).toFixed(2)}cc`:'?'}</b> 권장<br />
            <a className="open">상세 설명서 보기</a>
        </div>
        </li>
    ))
    const ListHeader = styled.div`
        background-color:skyblue;
        width:100%;
        height:40px;
        display:flex;
        justify-content:center;
        align-items:center;
    `;
    const ListSearch = styled.input`
    border : 1px solid black;
    width:100%;
    box-sizing:border-box;
    height:25px;
    outline:none;

    `;

    const ListBody = styled.div`

    `;

    return(
        <>
        
            <ListHeader onClick={()=>{ setToggle(!toggle) }}>약품</ListHeader>
            <ListSearch></ListSearch>
            <ListBody>
                { toggle 
                ?liElement(data)
                :liElement(data?.slice(0,3))

            }
            </ListBody>
        
            
        </>
    )
}

export default React.memo(CalcSupplies);