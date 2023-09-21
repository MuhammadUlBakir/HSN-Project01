import Cookies from 'js-cookie';
import Logoutt from "remixicon-react/LogoutBoxLineIcon";
import { Helmet } from "react-helmet";
import Styled from "styled-components";
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const StyledDiv = Styled.div`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap');

`
const Header =  () => {
    //--------------------------------
  const [toogle, Settoogle] = useState(false);
  const [cartdata, Setcartdata] = useState([]);
    const navigate = useNavigate();
    //--------------------------------
    const CheckIfLogin = () => {
        try {
            const Usertoken = Cookies.get("Usertoken2");
            !Usertoken ? Settoogle(true) : Settoogle(false)
        } catch (error) {
            console.log(error);
        }
  };
  //--------------------
  // const Test = async () => {
  //   const data = await Cart();
  
  // };
  // Test();
  const Cart = () => {
    const data = localStorage.getItem("GentleGlow1");
    console.log(data)
    Setcartdata(JSON.parse(data));
  }
  //--------------------
  const Logout = () => {
   
    Cookies.remove("Usertoken2");
    CheckIfLogin();
  }
    //--------------------
    useEffect(() => {
      CheckIfLogin();
      Cart();
      
       
    },[])
  return (
    <>
      <Helmet>
       <link rel="stylesheet" href="../../css/style.css" />
      </Helmet>
      <header className="header" data-header>
    <div className="container">
      <div className="overlay" data-overlay />
      <div className="header-search">
        <input type="search" name="search" placeholder="Search Product..." className="input-field" />
        <button className="search-btn" aria-label="Search">
          <ion-icon name="search-outline" />
        </button>
      </div>
      <a href="#" className="logo">
        <img src="/images/Hsnlogo.png" alt="Casmart logo" style={{height : "80px"}} />
      </a>
      <div className="header-actions">
       {toogle === true ? <> <button className="header-action-btn" onClick={() => navigate("/auth")}>
          <ion-icon name="person-outline" aria-hidden="true" />
          <p className="header-action-label">Sign in</p>
                      </button></> : <>
                              <button className="header-action-btn" onClick={() => Logout()} >
                                  <Logoutt/>
          <p className="header-action-label">Logout</p>
        </button>
                      </>}
        <button className="header-action-btn">
          <ion-icon name="search-outline" aria-hidden="true" />
          <p className="header-action-label">Search</p>
        </button>
        <button className="header-action-btn" onClick={() => navigate("/checkout")}>
          <ion-icon name="cart-outline" aria-hidden="true" />
          <p className="header-action-label">Cart</p>
              <div className="btn-badge green" aria-hidden="true">{cartdata?.length}</div>
        </button> 
        <button className="header-action-btn">
          <ion-icon name="heart-outline" aria-hidden="true" />
          <p className="header-action-label">Wishlisht</p>
          <div className="btn-badge" aria-hidden="true">2</div>
        </button>
      </div>
      <button className="nav-open-btn" data-nav-open-btn aria-label="Open Menu">
        <span />
        <span />
        <span />
      </button>
      <nav className="navbar" data-navbar>
        <div className="navbar-top">
          <a href="#" className="logo">
            <img src="/images/Hsnlogo.png" alt="Casmart logo" width={130} height={31} />
          </a>
          <button className="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
            <ion-icon name="close-outline" />
          </button>
        </div>
            <StyledDiv>
            <ul className="navbar-list" style={{fontFamily: "Nunito, sans-serif"}}>
          <li>
            <Link to={"/"} className="navbar-link">Home</Link>
          </li>
          <li>
            <Link to={"/category"} className="navbar-link">Shop</Link>
          </li>
          <li>
            <Link to={"/tracking"} className="navbar-link">Tracking</Link>
          </li>
          
          <li>
            <Link to={"/contact"} className="navbar-link">Contact</Link>
          </li>
        </ul>
      </StyledDiv>
      </nav>
    </div>
  </header>
      </>
  )
}

// export const Cart = async () => {
//   const Cartdata = localStorage.getItem("GentleGlow");
//   return JSON.parse(Cartdata)
// };
export default Header