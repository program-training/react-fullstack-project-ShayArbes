import React,{useRef,useState,useContext} from 'react'
import {NavContext} from "../conText/navContext"
import { styled } from 'styled-components';

function Nav() {

const tempSetoption = useContext(NavContext);
const {option, setOption} = tempSetoption;  

  return (
    <Container><nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container px-4 px-lg-5">
        <p className="navbar-brand">trips</p>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item"><button className="nav-link" onClick={()=>{setOption("AllTrips")}} >All trips</button></li>
            <li className="nav-item"><button className="nav-link"  onClick={()=>{setOption("UserRegistration")}}>sing up</button></li>
            <li className="nav-item"><button className="nav-link" onClick={()=>{setOption("UserLogin")}}>loge in </button></li>
            <li className="nav-item"><button className="nav-link" onClick={()=>{setOption("Home")}} >Home</button></li>
            </ul>
            
        </div>
    </div>
</nav></Container>
  )
}


export default Nav

const Container = styled.div`
 
`


