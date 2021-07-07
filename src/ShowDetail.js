import React,{useState} from 'react';
import styled,{css} from 'styled-components'
import DownIcons from './img/icons/down-arrow.svg';
import UpIcons from './img/icons/up-arrow.svg';
let ShowDetail = ({contents,lineClamp=0}) =>{
    const [lineClamps,setLineClamps] = useState(lineClamp);

    let FishDescription = styled.div`
        height:'100%';
        overflow:hidden;
        text-overflow:ellipis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: ${lineClamps};
    `;
    let ShowMore = styled.div`
        border: 1px solid #d5d5d5;
        width:100%;
        height: 30px;
        margin:10px 0;
        display:flex;
        justify-content:center;
        align-items:center;
        color:#b8b8b8;
    `;
    let ToggleBtn = styled.img`
        width:20px;
    `;
        

    return(
        <>
        <FishDescription>
            {contents.split('\n').map((line,i) =>{
                    return (<span key={i}>{line}<br/></span>)
            })}
            
        </FishDescription>
        <ShowMore onClick={()=>{lineClamps? setLineClamps(0):setLineClamps(lineClamp)}}>
            {lineClamps
            ?<><span>더보기</span><ToggleBtn src={DownIcons}/></>
            :<><span>접기</span><ToggleBtn src={UpIcons}/></>
            }
        </ShowMore>
        </>
    )
};

export default ShowDetail;