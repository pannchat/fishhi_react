import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import { FlexContainer } from './Layout';
import UserImg from './img/file/user.jpeg';
import LockImg from './img/icons/locked.svg';
const MyProfile = styled.div`
    box-sizing:border-box;
    background-color:#8AA1A1;
    border-radius:10px;
    width:100%;
    height:150px;
    padding:10px;
    color:white;

`;
let ProfileImg = styled.img`
    width:70px;
    height:70px;
    object-fit:cover;
    border-radius:100%;
`;
let ProfileBtn = styled.button`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color:white;
    width:100%;
    height:30px;

    border:1px solid white;
    border-radius: 5px;
    background-color:#8AA1A1;
`;
let PostCard = styled.div`
    
    width:100%;
    border-radius:5px;
    border: 1px solid #ECECEC;
    margin-bottom:10px;
`;
let TitleContainer = styled.div`
    width:auto;
    box-sizing:border-box;
    padding:5px;
    display:flex;
    flex-direction:column;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
`;

let PostTitle = styled.div`
    width:100%;
    font-size:20px;
    font-family:Roboto;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
`;
let PostDescription = styled.div`
    color:gray;
    font-size:15px;
`;
let PostBy = styled.span`
    display:flex;
    justify-content:flex-end;
    align-items:flex-end;
    font-size:10px;
    color : #B5B5B5;
    height:100%;
    padding:0 5px 5px 0;
    width:70px;
    text-align:right;
`;
let LockCon = styled.div`
position:relative;
`;
let LockDiv = styled.div`
    border-radius:50%;
    background-color:rgba(0,0,0,0.5);
    width:30px;
    height:30px;
    position:absolute;
    top:10px;
    right:10px;
    display:flex;
    justify-content:center;
    align-items:center;
`;
let LockImg2 = styled.img`
    width:20px;
`
const MyPage = () =>{
    const thumbnail = {
        width:"100%",
        borderRadius:"5px 5px 0 0",
        height:'190px',
        objectFit:'cover'
    }
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
                <ProfileBtn>프로필 수정</ProfileBtn>
                </MyProfile>
            </FlexContainer>
            <FlexContainer direction={'column'}>
                <PostCard>
                <LockCon>
                    <LockDiv><LockImg2 src={LockImg}/></LockDiv>
                </LockCon>
                    <img style={thumbnail} src="/img/file/thumb.jpeg"/>
                    <div className="card-caption">
                        <TitleContainer>
                            <PostTitle>#미니어항 블라블라블라블라블라블라</PostTitle>
                            <PostDescription>콩나나항</PostDescription>
                        </TitleContainer>
                        
                        <PostBy>2015/01/01~</PostBy>
                    </div>
                    
                </PostCard>
                <PostCard>
                <LockCon>
                    <LockDiv><LockImg2 src={LockImg}/></LockDiv>
                </LockCon>
                    <img style={thumbnail} src="/img/file/thumb.jpeg"/>
                    <div className="card-caption">
                        <TitleContainer>
                            <PostTitle>#미니어항 블라블라블라블라블라블라</PostTitle>
                            <PostDescription>콩나나항</PostDescription>
                        </TitleContainer>
                        
                        <PostBy>2015/01/01~</PostBy>
                    </div>
                    
                </PostCard>
            </FlexContainer>
        </>
    )
};

export default MyPage;