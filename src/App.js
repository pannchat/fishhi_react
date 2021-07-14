import React, {useEffect} from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Login from './Login'

import FishDict from './FishDict';
import Home from './Home';
import MyPage from './MyPage';
import FishtankCalc from './FishtankCalc';
function App() {

  const imgs = {
    width:'100%',
    height:"200px",
    objectFit:'cover',
  }
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/login'} component={Login} />
          <Route path={'/fish/:fid'} component={FishDict} />
          <Route path={'/mypage'} component={MyPage} />
          <Route path={'/calc'} component={FishtankCalc} />
        </Switch>
      </BrowserRouter>
      {/* <Login/> */}
      {/* <FishtankCalc/> */}

    </>
  );
}

export default App;
