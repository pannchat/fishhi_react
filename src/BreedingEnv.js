import React from 'react';
import styled from 'styled-components';
let BreedingEnvBox = styled.div`
    min-width:130px;
    height:170px;
    background-color:#8AA1A1;
    border-radius: 10px;
    box-sizing:border-box;
    padding:10px;
    color:white;
    margin:0 10px;
`;
let BreedingEnvIcons = styled.img`
    width:25px;
    fill:#fff;
`;
let BreedingEnvProperty = styled.div`
    margin-top:70px;
`;
let BreedingEnvValue = styled.div`
    font-weight: bold;
    font-size:24px;
`;


const BreedingEnv = ({icon, property, params1, params2}) =>{
    return(
        <BreedingEnvBox>
            <BreedingEnvIcons src={icon} />
            <BreedingEnvProperty>{property}</BreedingEnvProperty>
            
            {params2 
            ? <BreedingEnvValue>{params1}~{params2}{property === '온도'? <span>°C</span>:''}</BreedingEnvValue> 
            : <BreedingEnvValue>{params1}{property==='길이'? <span>cm</span>:''}</BreedingEnvValue>}
        </BreedingEnvBox>
    )
}

export default BreedingEnv;