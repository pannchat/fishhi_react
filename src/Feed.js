import React from 'react';
import styled from 'styled-components';
import './Feed.css';
let PostCard = styled.div`
    width:90%;
    

    margin:10px;
    border-radius:5px;
    border: 1px solid #ECECEC;
`;
let ProfileImg = styled.img`
    padding:0px 10px;
    width:35px;
    height:35px;
    object-fit:cover;
    border-radius:50%;
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
        <>
        <PostCard>
            <img style={thumbnail} src="/img/file/thumb.jpeg"/>
            <div className="card-caption">
                <ProfileImg src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"/>
                <PostTitle>#미니어항 블라블라블라블라블라블라</PostTitle>
            <PostBy>Post By.<br/>씨알이</PostBy>
            </div>
        </PostCard>
        <PostCard>
            <img style={thumbnail} src="/img/file/thumb.jpeg"/>
            <div className="card-caption">
                <ProfileImg src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"/>
                <PostTitle>#미니어항 블라블라블라블라블라블라</PostTitle>
            <PostBy>Post By.<br/>씨알이</PostBy>
            </div>
        </PostCard>
        </>
    )
}
function Feed(){

    return(
        <Post/>
    )
}

export default Feed;