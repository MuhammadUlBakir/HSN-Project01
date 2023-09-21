import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Styled from "styled-components";
import FaceBook from "remixicon-react/FacebookFillIcon";
import Google from "remixicon-react/GoogleFillIcon";
import Github from "remixicon-react/GithubFillIcon";
import Cookies from "js-cookie"
import {
  ErrorToast,
  SuccessToast,
  WarningToast,
} from "../React-Toastify/React_Toasts";
import { toast } from "react-toastify";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyleDiv = Styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

  
  * {
  box-sizing: border-box;
}

body {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
}

h1 {
  font-weight: bold;
  margin: 0;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #FF4B2B;
  background-color: #FF4B2B;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #FFFFFF;
}

form {
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}


  body {
    background: #f6f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    margin: 0;
  }

  /* Other styles remain the same */

  .container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25),
                0 10px 10px rgba(0,0,0,0.22);
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 768px;
    min-height: 480px;
  }
  .form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
	background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  	transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

.social-container {
	margin: 20px 0;
}

.social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}

footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}

footer p {
    margin: 10px 0;
}

footer i {
    color: red;
}

footer a {
    color: #3c97bf;
    text-decoration: none;
}
`;

const UserAuth = () => {
  const [data, Setdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, Setloading] = useState(false);
  const [loginemail, Setloginemail] = useState("");
  const [loginpass, Setloginpass] = useState("");
    const [hide, Sethide] = useState(false)
    //------------------
    const navigate = useNavigate();
    //------------------
  const Inputval = (e) => {
    const { name, value } = e.target;
    Setdata((pre) => {
      return { ...pre, [name]: value };
    });
  };
  //-------------------------
  const Signup = async () => {
    const { username, email, password } = data;
    try {
      if (!username || !email || !password) {
        WarningToast("Plz Fill All Fields", 4000);
      } else {
        const signup = await axios.post("/api/signup", { data });
        if (signup.data.status === 418 && signup.data.success === false) {
          ErrorToast("Acount Already Valid", 3000);
        } else {
          SuccessToast("Signup Successfully", 3000);
          Setdata("");
          const container = document.getElementById("container");
          container.classList.remove("right-panel-active");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  //-------------------------
  const Signin = async () => {
    try {
      if (!loginemail || !loginpass) {
        WarningToast("Plz Fill All Fields");
      } else {
        Setloading(true);
        const signin = await axios.post("/api/signin", {
          email: loginemail,
          password: loginpass,
        });
        console.log(signin)
        if (signin.data.success === true && signin.data.status === 200) {
          Setloading(false);
          console.log(signin.data.token);
          Cookies.set("Usertoken", signin.data.token);
          Cookies.set("Usertoken2", signin.data.token);

          SuccessToast("Login Successfully", 2000);
          setTimeout(() => navigate("/") , 3000)
        } else {
            Setloading(false);
          ErrorToast(`Invalid Cridentials`, 4000);
        }
      }
    } catch (error) {
      console.log(error);
    }
    };
    //-------------------------
    const VerifyEmail = async () => {
        try {
            const verifyemail = await axios.post("/api/otpemail", { loginemail });
            if (verifyemail.data.success === true && verifyemail.data.status === 200) {
              Cookies.set("useremail", loginemail);
              Cookies.set("otpcode", verifyemail.data.Otpcode);
                SuccessToast("Otp Send To Your Gmail" , 3000)
                setTimeout(() => navigate("/verifyotp"));
            } else {
                ErrorToast("Not Verified")
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
      <StyleDiv>
        <Helmet>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap');
          </style>

          <script src="../../Js/auth" />
        </Helmet>
        <div
          className="container"
          id="container"
          style={{
            marginLeft: "450px",
            marginTop: "130px",
            fontFamily: "Nunito, sans-serif",
          }}
        >
          <div className="form-container sign-up-container">
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <FaceBook />
                </a>
                <a href="#" className="social">
                  <Google />
                </a>
                <a href="#" className="social">
                  <Github />
                </a>
              </div>
              <span>or use your email for registration</span>
              <input
                type="text"
                onChange={Inputval}
                value={data.username}
                name="username"
                placeholder="Name"
                style={{
                  borderRadius: "10px",
                  fontFamily: "Nunito, sans-serif",
                }}
                required
              />
              <input
                type="email"
                onChange={Inputval}
                value={data.email}
                name="email"
                placeholder="Email"
                style={{
                  borderRadius: "10px",
                  fontFamily: "Nunito, sans-serif",
                }}
                required
              />
              <input
                type="password"
                onChange={Inputval}
                value={data.password}
                name="password"
                placeholder="Password"
                style={{
                  borderRadius: "10px",
                  fontFamily: "Nunito, sans-serif",
                }}
                required
              />
              <button
                style={{
                  fontFamily: "Nunito, sans-serif",
                  marginTop: "7px",
                  cursor: "pointer",
                }}
                onClick={Signup}
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
                      <form action="#" onSubmit={(e) => e.preventDefault()}>
                          {hide === false ? <h1>Sign in</h1> : <h1>Verify Email</h1>}
              <div className="social-container">
                <a href="#" className="social">
                  <FaceBook />
                </a>
                <a href="#" className="social">
                  <Google />
                </a>
                <a href="#" className="social">
                  <Github />
                </a>
              </div>
              <span>or use your account</span>
              <input
                type="email"
                onChange={(e) => Setloginemail(e.target.value)}
                value={loginemail}
                placeholder="Email"
                style={{
                  borderRadius: "10px",
                  fontFamily: "Nunito, sans-serif",
                }}
              />
            {hide === false ?   <input
                type="password"
                onChange={(e) => Setloginpass(e.target.value)}
                value={loginpass}
                placeholder="Password"
                style={{
                  borderRadius: "10px",
                  fontFamily: "Nunito, sans-serif",
                }}
              /> : ""}
                          <a href="#" onClick={() => Sethide(true)}>{hide === false ? "Forgot your password?" : ""}</a>
                          {hide === false ? <>
                            {loading === false ? (
                <button
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    cursor: "pointer",
                  }}
                  onClick={Signin}
                >
                  Sign In
                </button>
              ) : (
                <button
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    cursor: "pointer",
                    height: "40px",
                    width: "144px",
                  }}
                
                >
                  <img
                    src="images/transloader.gif"
                    style={{ height: "20px", marginTop: "-4px" }}
                  />
                </button>
              )}
                          </> : <button style={{ fontFamily: "Nunito, sans-serif" , marginTop : "-20px" , cursor : "pointer"}} onClick={VerifyEmail}>Verify</button>}
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                {data.username &&
                typeof data.username === "string" &&
                !undefined ? (
                  <h3>{data.username}</h3>
                ) : null}
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  style={{ fontFamily: "Nunito, sans-serif" }}
                  className="ghost"
                  id="signIn"
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start the journey with us</p>
                <button
                  style={{ fontFamily: "Nunito, sans-serif" }}
                  className="ghost"
                  id="signUp"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </StyleDiv>
    </>
  );
};

export default UserAuth;
