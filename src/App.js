import React, {useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import MainNav from './MainNav'
import NavBar from './NavBar';
import Feed from './Feed'
import Login from './Login'
import axios from 'axios';
function App() {

  const imgs = {
    width:'100%',
    height:"200px",
    objectFit:'cover',
  }
  return (
    <>
      {/* <Login/> */}
      <NavBar/>
      <MainNav/>
      <Feed/>
    </>
  );
}

export default App;
