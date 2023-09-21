import React, { useEffect, useState } from 'react'
import Styled from "styled-components";
import Header from '../../Navigation/Header';
import FontLoader from 'react-google-font-loader';
import { Helmet } from "react-helmet";

import DAT from "date-and-time";
import { ErrorToast, SuccessToast } from '../../React-Toastify/React_Toasts';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Div = Styled.div`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap');
*,
*:after,
*:before {
  box-sizing: border-box;
}

ul {
  padding-left: 10px;
}

body {
  font-family: "Josefin Sans", sans-serif;
  // color: #0a0a0a;
  line-height: 1.4;
}

a {
  color: #000;
}

.content {
  z-index: 9999;
}

.secure,
.backBtn {
  display: flex;
}
.secure span,
.backBtn span {
  margin-left: 5px;
}

.backBtn {
  margin-top: 20px;
}

.secure {
  color: #afb5c0;
  align-items: flex-end;
}
.secure .icon {
  font-size: 20px;
  line-height: 20px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.logo .icon {
  font-size: 32px;
  line-height: 32px;
  margin-right: 5px;
}

img {
  width: 100%;
  border-radius: 8px 0 0 8px;
}

.details {
  max-width: 800px;
  min-height: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -200px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
}
.details__item {
  display: flex;
}
.details__user {
  background: #f6f9fc;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #dadada;
}

.item__quantity {
  position: absolute;
  right: 50px;
  top: 30px;
  font-size: 20px;
}
.item__image {
  display: flex;
  align-items: center;
  justify-content: center;
}
.item__image .iphone {
  margin-top: -50px;
  margin-left: -100px;
  width: 200px;
}
.item__details {
  padding: 30px;
}
.item__title {
  font-size: 28px;
  font-weight: 600;
}
.item__price {
  font-size: 22px;
  color: #bec3cb;
}

.icon {
  font-size: 16px;
  vertical-align: middle;
}

header {
  // background-color: #f6f9fc;
  min-height: 500px;
  background-image: url("../images/pattern.png");
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0 80px 0;
  color: #246eea;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
}

.container {
  width: 960px;
  margin: 0 auto;
}

.shadow {
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
}

.row {
  display: flex;
}

.txt {
  border-color: #e1e8ee;
  width: 100%;
}

.input {
  border-radius: 5px;
  border-style: solid;
  border-width: 2px;
  height: 48px;
  padding-left: 15px;
  font-weight: 600;
  font-size: 14px;
  color: #5e6977;
}

input[type="text" required] {
  display: initial;
  padding: 15px;
}

.text-validated {
  border-color: #7dc855;
  background-image: url("../images/icon-tick.png");
  background-repeat: no-repeat;
  background-position: right 18px center;
}

.ddl {
  border-color: #f0f4f7;
  // background-color: #f0f4f7;
  width: 100px;
  margin-right: 10px;
}

.title {
  font-size: 14px;
  padding-bottom: 8px;
}

.field {
  padding-top: 15px;
  padding-right: 30px;
  width: 50%;
}
.field.small {
  width: auto;
}

.notification {
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  display: flex;
  justify-content: center;
}
.notification .icon {
  font-size: 28px;
  color: #7dc855;
  line-height: 28px;
  margin-right: 10px;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0 40px 0;
}

.payment {
  padding: 20px 0 0 0;
}
.payment__title {
  margin: 40px 0 20px 0;
  font-size: 18px;
  display: flex;
  text-align: left;
}
.payment__title .icon {
  margin-right: 10px;
}

.btn {
  font-family: "Josefin Sans", sans-serif;
  border-radius: 8px;
  border: 0;
  letter-spacing: 1px;
  color: #fff;
  background: #246eea;
  padding: 20px 60px;
  white-space: nowrap;
  font-size: 16px;
  line-height: 1;
  text-transform: uppercase;
  transition: all 0.15s ease;
  text-decoration: none;
}
.btn .icon {
  margin-left: 10px;
  font-size: 20px;
}
.btn:hover {
  -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
  background: #4984ea;
}
.btn.action__back {
  background: transparent;
  color: #a0a0a0;
}

.payment__types {
  display: flex;
  justify-content: center;
  align-items: center;
}

.payment__info {
  display: flex;
}

.payment__cc {
  flex: 60%;
}

.payment__shipping {
  flex: 40%;
}

.shipping__info {
  background: #f6f9fc;
  padding: 10px;
  border-radius: 8px;
}

.payment__type {
  display: flex;
  border: 2px solid #d9d9d9;
  border-radius: 8px;
  padding: 20px 40px;
  width: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #d9d9d9;
  transition: all 0.15s ease;
}
.payment__type:hover {
  -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
}
.payment__type.active {
  color: #0a0a0a;
  background: #f6fcf7;
  border-color: #7dc855;
}
.payment__type .icon {
  font-size: 32px;
  margin-right: 10px;
}
.payment__type + .payment__type {
  margin-left: 10px;
}

.icon-xl {
  font-size: 48px;
  line-height: 48px;
}

.content {
  display: block;
}

.thankyou {
  display: block;
}
.thankyou .details {
  opacity: 1;
  justify-content: center;
  align-items: center;
}
.thankyou .details h3 {
  font-weight: 600;
}
.thankyou .details__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.thankyou .details__item .icon-xl {
  font-size: 32px;
  color: #7dc855;
  line-height: 32px;
}

.loading {
  position: relative;
}
.loading:after {
  -webkit-animation: spinAround 0.5s infinite linear;
  animation: spinAround 0.5s infinite linear;
  border: 4px solid #7dc855;
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  height: 5em;
  width: 5em;
  position: absolute;
}
.loading .details__item {
  opacity: 0;
}

@-webkit-keyframes spinAround {
  from {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}

@keyframes spinAround {
  from {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}

`
const Checkout = () => {
  const [data, Setdata] = useState({
    username: "",
    email: "",
    phone: "",
    city: "",
    adress: "",
    countryname: "",
  });
  const [acc, Setacc] = useState("");
  const [toogle, Settoogle] = useState(false); 
  const [cartdata, Setcartdata] = useState([]);
  const [hide, Sethide] = useState(false);
  const navigate = useNavigate();
  //------------------------
  const Inputval = (e) => {
    const { name, value } = e.target;
    Setdata((prevState) => ({ ...prevState, [name]: value }));
  }
  //------------------------
  const date = new Date();
  const Currdate = DAT.format(date, "D/MM/YYYY");
  //------------------------
  const Cartdata = () => {
    const data = localStorage.getItem("GentleGlow1");
    if (data) {
      Sethide(false);
      Setcartdata(JSON.parse(data));
    } else {
      Sethide(true);
    }
  };
  //------
  let total = 0
  //------------------------
  const PlaceOrder = async () => {
    const {username , email , phone , city , adress , countryname} = data
    try {
      if (!username || !email || !phone || !city || !adress ) {
        ErrorToast("PLz Fill All Fields");
      } else {
        const data = localStorage.getItem("GentleGlow1");
        const NewOrder = await axios.post("/api/createorder", { orderdata: JSON.parse(data), username, email, phone, city, adress, countryname, acount: acc , totalamount :  total + (total * (5 / 100)) });
        if (NewOrder.data.success === true ) {
          SuccessToast("Ordered Successfully", 4000);
          localStorage.clear();
          setTimeout(() => navigate("/"), 6000);
        } else {
          ErrorToast('Something Went Wrong');
         }
        // console.log(NewOrder.data.success)
      }
    } catch (error) {
      console.log(error);
    }
  }
  //------------------------
  useEffect(() => {
    Cartdata();
  },[])
  return (
      <> 
      <Header/>
          <Div>
          <div style={{fontFamily: "Nunito, sans-serif" , backgroundColor : "white"}}>
  <header >
    <div className="container" >
      <div className="navigation">
       
        {hide === false ? <div className="secure">
          <i className="icon icon-shield" />
          <span>Secure Checkout</span>
        </div> : ""}
      </div>
    {hide === false ?   <div className="notification">
        Complete Your Purchase
      </div> :   <div className="notification" style={{color : "red"}}>
        No Data Found!
      </div>}
    </div>
  </header>
 {hide === false ? <> <section className="content">
    
    {cartdata.map((elm, ind) => {
      total += elm.ProductPrice
      return (
        <>
          <div className="container">
        <div className="details shadow">
<div className="details__item">
<div className="item__image"  style={{ height : "50px" , marginTop : "50px" , marginLeft : "10px" , backgroundColor : "white"}}>
  <img className="iphone" style={{width : "90px" ,}}  src={elm.ProductImage} alt />
</div>
<div className="item__details">
  <div className="item__title">
    {elm.ProductName}
  </div>
  <div className="item__price">
  {elm.ProductPrice * elm.quantity}
  </div>
  <div className="item__quantity">
    Quantity: {elm.quantity}
                </div>
                
              </div>
            
              </div>
              <div style={{marginRight : "40px"}}>
              <div style={{marginTop : "50px" , marginLeft : "600px" , fontSize : "25px"}}>
                  <h5 > Subtotal : { total} </h5>
              
              </div>
              <div style={{ marginLeft : "591px" , fontSize : "25px" , marginTop : "6px"}}>
                <h5 > GST (5%) : { total + (total * (5 / 100))} </h5>
              
                </div>
                <br />
                <hr />
              <div style={{ marginLeft : "481px" , fontSize : "28px" , marginTop : "6px"}}>
                <h5 > Toatal Amount :  { total + (total * (5 / 100))}Rs </h5>
              
                </div>
                <br />
              </div>
          </div>
        
          </div>
        </>
)
})}
<div className="discount" />
              <div className="container">
              <div className="payment__title" style={{display : "flex" , justifyContent : "center" , fontWeight : "bold" , fontSize : "23px"}}>
  Payment Method
</div>
<div className="payment">

<div className="payment__types" style={{textAlign : "center"}}>
  <div className="payment__type payment__type--cc active" onClick={() => Settoogle(false)}>
    <i className="icon icon-credit-card" />Credit</div>
  <div className="payment__type payment__type--cc active" onClick={() => Settoogle(true)}>
    <i className="icon icon-paypal" />Paypal</div>
  <div className="payment__type payment__type--paypal--c active" onClick={() => Settoogle(true)}>
    <i className="icon icon-wallet" />SEPA</div>
  <div className="payment__type payment__type--c active" onClick={() => Settoogle(false)}>
    <i className="icon icon-note" />COD</div>
</div>
<div className="payment__info">
  <div className="payment__cc">
    <div className="payment__title" style={{fontWeight : "bold" , fontSize : "20px"}}>
      <i className="icon icon-user" />Personal Information
    </div>
    <form>
      <div className="form__cc">
        <div className="row">
          <div className="field">
            
            <input type="text" required className="input txt text-validated" style={{marginTop : "-10px" , width : "300px"}} onChange={Inputval} value={data.username} name='username' placeholder='Enter Reciver Name' />
                  </div>
                  <div className="field">
            
            <input type="text" required className="input txt text-validated" style={{marginTop : "-10px" , width : "300px"}} onChange={Inputval} value={data.email} name='email' placeholder='Enter Your Email' />
                  </div>
                  
                </div>
                <br />
                <div className="row">
          <div className="field">
            
            <input type="text" required className="input txt text-validated" style={{marginTop : "-10px" , width : "300px"}} onChange={Inputval} value={data.phone} name='phone' placeholder='Enter Your Phone Number' />
                  </div>
                  <div className="field">
            
            <input type="text" required className="input txt text-validated" style={{marginTop : "-10px" , width : "300px"}} onChange={Inputval} value={data.city} name='city' placeholder='Enter Your City Name' />
                  </div>
                  
                </div>
                <br />
                <div className="row">
          <div className="field">
            
            <input type="text" required className="input txt text-validated" style={{marginTop : "-10px" , width : "300px"}} onChange={Inputval} value={data.adress} name='adress' placeholder='Enter Your Adress' />
                  </div>
                  <div className="field">
            {toogle === false ?                     <input type="text" required className="input txt text-validated" style={{marginTop : "-10px" , width : "300px"}} onChange={Inputval} value={data.countryname} name='countryname' placeholder='Enter Your Country Name' />
:                     <input type="number" required className="input txt text-validated" style={{marginTop : "-10px" , width : "300px"}} onChange={(e) => Setacc(e.target.value)} value={acc} name='countryname' placeholder='Enter Your Acount Number' />
}
                  </div>
                  
        </div>
       
      </div>
    </form>
  </div>
  <div className="payment__shipping" style={{fontFamily: "Nunito, sans-serif"}}>
    <div className="payment__title" style={{fontWeight : "bold" , fontSize : "20px"}}>
      <i className="icon icon-plane" /> Shiping Information
    </div>
    <div className="details__user">
              <div className="user__name">Name : {data.username}
              <div className='user__name'>{data.email}</div>
               Date : {Currdate}</div>
              <div className="user__address">Shipping Address : {data.adress}
                <div className='user__name'>City : {data.city}</div>
                <div className='user__name'>Phone : {data.phone}</div>
                                
                                </div>
              {toogle === false ? <> Country : {data.countryname}</> : <>Acc Number : {acc}</>}</div>
             
  </div>
</div>
</div>
    </div>
    <br />
    <br />
    <div className="container">
      <button className='btn' style={{ width: "300px", height: "47px", fontFamily: "Nunito, sans-serif", marginLeft: "190px" }} onClick={PlaceOrder}>Place Your Order</button>
      <a href="#" className="backBtn" style={{fontFamily: "Nunito, sans-serif" , marginLeft: "270px"}} onClick={() => navigate("/category")}> {`<-`} Go Back to Shop</a>
{/* <div className="actions">
<a href="#" className="btn" style={{height : "18px" , width : "270px" , fontFamily: "Nunito, sans-serif"}} onClick={PlaceOrder}>Place your Order
  <i className="icon icon-arrow-right-circle" />
</a>
<a href="#" className="backBtn" style={{fontFamily: "Nunito, sans-serif"}} onClick={() => alert("Back To Home")}> {`<-`} Go Back to Shop</a>
</div> */}
    </div>
            <br /><br /></section></> : <><button className='btn' style={{ fontFamily: "Nunito, sans-serif" , marginTop : "-299px" , marginLeft : "870px" }} onClick={() => navigate("/")}>{"<-"} continue Shopping</button></>}
</div>
      </Div>
      </>
  )
}

export default Checkout