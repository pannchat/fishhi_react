import React, {useEffect} from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MainNav from './MainNav'
import NavBar from './NavBar';
import Feed from './Feed'
import Login from './Login'
import axios from 'axios';
import FishDict from './FishDict';
import Home from './Home';
function App() {

  const imgs = {
    width:'100%',
    height:"200px",
    objectFit:'cover',
  }
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/login'} component={Login} />
          <Route path={'/fish/:fid'} component={FishDict} />
        </Switch>
      </BrowserRouter>
      {/* <Login/> */}
      {/* <FishDict/> */}

    </>
  );
}

export default App;
