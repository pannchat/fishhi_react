import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Feed.css';
import UserImg from './img/file/user.jpeg';
import {FlexContainer} from './Layout';
let PostCard = styled.div`
    width:100%;
    border-radius:5px;
    border: 1px solid #ECECEC;
    margin-bottom:10px;
`;
let ProfileContainer = styled.div`
    box-sizing:border-box;
    width:70px;
    height:50px;
    padding:10px;
    display:flex;
    align-items:center;
`;
let ProfileImg = styled.img`
    width:35px;
    height:35px;
    object-fit:cover;
    border-radius:100%;
`;

let PostTitle = styled.div`
    width:100%;
    font-size:20px;
    font-family:Roboto;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
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


function Post(){
    const thumbnail = {
        width:"100%",
        borderRadius:"5px 5px 0 0",
        height:'190px',
        objectFit:'cover'
    }
    return(
        <FlexContainer direction={'column'}>
            <Link onClick={()=>alert('이 기능은 아직 준비중입니다.\n현재 검색기능과 어항계산기 기능만 이용 가능합니다')}><PostCard>
                <img style={thumbnail} src="/img/file/thumb.jpeg"/>
                <div className="card-caption">
                    <ProfileContainer><ProfileImg src={UserImg}/></ProfileContainer>
                    <PostTitle>#미니어항 블라블라블라블라블라블라</PostTitle>
                <PostBy>Post By.<br/>씨알이</PostBy>
                </div>
            </PostCard>
            </Link>
            <Link onClick={()=>alert('이 기능은 아직 준비중입니다.\n현재 검색기능과 어항계산기 기능만 이용 가능합니다')}>
                <PostCard>
                <img style={thumbnail} src="/img/file/thumb2.jpeg"/>
                <div className="card-caption">
                <ProfileContainer><ProfileImg src={UserImg} alt='user profile'/></ProfileContainer>
                    <PostTitle>#미니어항 블라블라블라블라블라블라</PostTitle>
                <PostBy>Post By.<br/>씨알이</PostBy>
                </div>
            </PostCard>
            </Link>
        </FlexContainer>
    )
}
function Feed(){

    return(
        <Post/>
    )
}

export default Feed;