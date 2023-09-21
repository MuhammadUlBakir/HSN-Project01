import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../Navigation/Header';
import { ErrorToast } from '../../React-Toastify/React_Toasts';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 400px;
//   border: 2px solid black;
  background-color: lightgray;
  height: 40px;
  border-radius: 15px;
  padding: 10px;
`;

const Button = styled.button`
  border: none;
  background-color: #246eea;
  color: white;
  padding: 10px 20px;
  border-radius: 15px;
  margin-left: 10px;
  cursor: pointer;
`;

const Div = styled.div`
.hh-grayBox {
    background-color: #F8F8F8;
    margin-bottom: 20px;
    padding: 35px;
    margin-top: 20px;
  }
  .pt45 {
    padding-top: 45px;
  }
  .order-tracking-container {
    display: flex;
    justify-content: space-between;
  }
  .order-tracking {
    text-align: center;
    flex: 1;
    position: relative;
    display: block;
    margin: 0 10px;
  }
  .order-tracking .is-complete {
    display: block;
    position: relative;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    border: 0px solid #AFAFAF;
    background-color: #f7be16;
    margin: 0 auto;
    transition: background 0.25s linear;
    -webkit-transition: background 0.25s linear;
    z-index: 2;
  }
  .order-tracking .is-complete:after {
    display: block;
    position: absolute;
    content: '';
    height: 14px;
    width: 7px;
    top: -2px;
    bottom: 0;
    left: 5px;
    margin: auto 0;
    border: 0px solid #AFAFAF;
    border-width: 0px 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  .order-tracking.completed .is-complete {
    border-color: #27aa80;
    border-width: 0px;
    background-color: #27aa80;
  }
  .order-tracking.completed .is-complete:after {
    border-color: #fff;
    border-width: 0px 3px 3px 0;
    width: 7px;
    left: 11px;
    opacity: 1;
  }
  .order-tracking p {
    color: #A4A4A4;
    font-size: 16px;
    margin-top: 8px;
    margin-bottom: 0;
    line-height: 20px;
  }
  .order-tracking p span {
    font-size: 14px;
  }
  .order-tracking.completed p {
    color: #000;
  }
  .order-tracking::before {
    content: '';
    display: block;
    height: 3px;
    width: calc(100% - 40px);
    background-color: #f7be16;
    top: 13px;
    position: absolute;
    left: calc(-50% + 20px);
    z-index: 0;
  }
  .order-tracking:first-child:before {
    display: none;
  }
  .order-tracking.completed:before {
    background-color: #27aa80;
  }
`;
const FontStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap');

`
const Tracking = () => {
  const [hide, Sethide] = useState(false);
  const [id, Setid] = useState("");
  const [data, Setdata] = useState([]);
  //-------------------
  const TrackOrder = async () => {
    try {
      if (id) {
        const track = await axios.post("/api/trackorder", { orderid: id });
        if (track) {
          Sethide(true);
          Setdata(track.data.CheckStatus);
        } else {
          ErrorToast("Inavlid Id")
          Sethide(false)
        }
      } else {
        ErrorToast("Enter Order Number")
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
          <Header />
          <br />
          <FontStyle><h2 style={{fontFamily: "Nunito, sans-serif"}} className="h2 section-title">Track Your Order </h2></FontStyle>

          <br />
      <Container>
              <Input 
                  style={{fontSize : "16px"}}
          type="text"
          onChange={(e) => Setid(e.target.value)}
          value={id}
          placeholder="  Enter Your Tracking Id"
        />
        <Button onClick={() => TrackOrder()}>Search</Button>
      </Container>
     {hide === false ? "" : <> <Div>
        <div style={{ borderRadius: "20px" }}>
          <div className="container" style={{fontFamily: "Nunito, sans-serif" }}>
            <div className="row">
              <div className="col-12 col-md-10 hh-grayBox pt45 pb20">
                <div className="order-tracking-container">
                  <div className="order-tracking completed">
                    <span className="is-complete"></span>
                    <p style={{ fontSize: "20px", fontWeight: "bolder" }}>
                      
                    {data.orderstatus === "Process" ? "Ordered" : "hello"}
                      <br />
                      <span style={{ fontSize: "18px" , marginTop : "5px"}}>{data.orderdate}</span>
                    </p>
                  </div>
                  <div className="order-tracking">
                    <span className="is-complete"></span>
                    <p style={{fontSize : "20px" , fontWeight : "bolder"}}>
                      Shipped
                      <br />
                      <span style={{fontSize : "18px" ,  marginTop : "5px"}}>-</span>
                    </p>
                  </div>
                  <div className="order-tracking">
                    <span className="is-complete"></span>
                    <p style={{fontSize : "20px" , fontWeight : "bolder"}}>
                      Delivered
                      <br />
                      <span style={{fontSize : "18px"  , marginTop : "5px"}}>-</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Div></>}
    </>
  );
};

export default Tracking;
