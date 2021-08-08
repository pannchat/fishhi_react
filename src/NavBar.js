import React,{Component, useState,memo, useEffect,useCallback} from 'react';

import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import SearchIcon from './img/icons/search2.svg'
import goBackIcon from './img/icons/back.svg'
import styled from 'styled-components';
// import Back from './img/icons/back.svg'
import './css/NavBar.css'
// import axios from 'axios'
import { useHistory } from 'react-router';

let SearchBtn = styled.img`
    width:23px;
    cursor:pointer;
`;
let GoBackBtn = styled.img`
  width:23px;
  cursor:pointer;
`;
const SearchResultList = styled.div`
  border:none;
  border-bottom:1px solid #6E7881;
  box-sizing:border-box;
  line-height:50px;
  vertical-align:middle;
  font-size:14pt;
`;
const NavBar = ({showBackBtn=true}) => {

  let history = useHistory();
  const test = {"data":[
    {"id":1,"name":"라쿤 타이거 새우","keyword":['비쉬림프','쉬림프']},
    {"id":2,"name":"오렌지 타이거 새우 (Orange tiger shrimp, Tangerine tiger shrimp)","keyword":["비쉬림프"]},
    {"id":3,"name":"크리스탈 화이트 새우","keyword":["오토신"]},
    {"id":5,"name":"다리오다리오","keyword":["스칼렛바디스"]},
    {"id":6,"name":"아프리카발톱개구리","keyword":["똥고기"]},
    {"id":7,"name":"구라미","keyword":["똥고기"]},
    {"id":8,"name":"코리도라스 하스타투스","keyword":["Corydoras hastatus"]},
    {"id":9,"name":"코리도라스 듀프리카레우스","keyword":["Corydoras duplicareus","듀플리"]},
    {"id":10,"name":"코리도라스 스터바이","keyword":["Corydoras sterbai"]},
  ]};
    
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
        isPaneOpenBottom: false,
      });
      const [search, setSearch] = useState('');
      const [data, setData] = useState([]);
      const [text,setText] = useState('');
      const [suggestion,setSuggestion] =useState([]);
      useEffect(()=>{
        const loadUsers = async () =>{
          // const response = await axios.get('https://reqres.in/api/users');
          setData(test.data);
        }
        loadUsers();
      },[]);
      const onChangeHandler = useCallback((text) => {
        
        let matches = [];
        let matches2 = []
        text = text.replace('\\','');
        if (text.length > 0){
          matches = data.filter( dt => {
            const regex = new RegExp(`${text}`, "gi");
            // var test = [...dt.email,...dt.first_name];

            return dt.name.match(regex);
          })
        }
        if (text.length > 0){
          matches2 = data.filter( dt => {
            const regex = new RegExp(`\\${text}`, "gi");
            // var test = [...dt.email,...dt.first_name];
            let test = null
             dt.keyword.map(e => {
                if (e.match(regex)){
                  test =  dt.keyword
                  return
                }
            })

            return test
          })
        }
        var result = new Set([...matches,...matches2])
        
        
        setSuggestion([...result])
        if(text.length > 0 && result.length>0){
        }
        setText(text)
      },[text,suggestion]);


      // const onSuggestHandler = useCallback((text) =>{
      //   console.log(text);
      //   setText(text)
      //   onChangeHandler(text)
      // },[text]);
    return(
        <>
            <div className="nav-top">
                { showBackBtn ? <GoBackBtn src={goBackIcon} onClick={()=>{history.push('/')}}/> : <span></span>}
                <SearchBtn className='' src={SearchIcon} onClick={()=> setState({isPaneOpenBottom:true})}/>
            </div>
            <div>

      <SlidingPane

        closeIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 22"><path fill="currentColor" fill-rule="evenodd" d="M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z"></path></svg>}
        isOpen={state.isPaneOpenBottom}
        subtitle={<div className="test">
          <input className="input-box" placeholder="검색어를 입력하세요" 
          onChange={ e => { onChangeHandler(e.target.value) } } 
        value={text}
        
        >
          
          
        </input>

        <SearchBtn className='search-btn' src={SearchIcon} onClick={()=> console.log("검색")}/>
        {/* <div stlye={searchArea}> */}

        {/* </div> */}
        </div>
        
      }
        from="bottom"
        width="100%"


        onRequestClose={() => setState({ isPaneOpenBottom: false })}
      >
        { 
        suggestion.length>0?
           (suggestion.map((suggestion, i) => 
            <SearchResultList key={i} onClick={()=>{
              setState({isPaneOpenBottom:false});
              history.push('/fish/'+suggestion.id);
            }}>
            {suggestion.name}
            </SearchResultList>)
            )
            // 검색어는 있으나 검색결과가 없을때
            :text.length>1? (
              <SearchResultList>
                찾으시는 내용이 없어요 ㅠㅠ
              </SearchResultList>)
            :(
              // 첫화면
            <SearchResultList>검색해보세요</SearchResultList>
            )
        }
      </SlidingPane>
    </div>
        </>
    )
}

export default React.memo(NavBar);