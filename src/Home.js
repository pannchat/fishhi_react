import React from 'react';
import NavBar from './NavBar';
import MainNav from './MainNav';
import Feed from './Feed';
const Home = () =>{
    return(
        <>
            <NavBar showBackBtn={false}/>
            <MainNav/>
            <Feed/>
        </>
    )
}
export default Home;