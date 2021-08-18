import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import { FlexContainer } from './Layout';
import UserImg from './img/file/user.jpeg';
const MyProfile = styled.div`
    box-sizing:border-box;
    background-color:#8AA1A1;
    border-radius:10px;
    width:100%;
    height:150px;
    padding:10px 5px;
    color:white;
`;
let ProfileImg = styled.img`
    width:70px;
    height:70px;
    object-fit:cover;
    border-radius:100%;
`;

const MyPage = () =>{

    return (
        <>
            <NavBar/>
            <FlexContainer>
                <MyProfile>
                <FlexContainer>
                    <ProfileImg src={UserImg} alt='user profile'/>
                    <FlexContainer direction="column">
                        <div>씨알이(CRS)</div>
                        <div style={{fontSize:'9pt'}}>admin@admin.com</div>
                    </FlexContainer>
                </FlexContainer>
                s
                </MyProfile>
            </FlexContainer>
        </>
    )
};

export default MyPage;