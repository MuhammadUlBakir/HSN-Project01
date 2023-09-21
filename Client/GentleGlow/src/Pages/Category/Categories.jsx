import React from 'react'
import Category from '../HomePage/Category'
import { Helmet } from "react-helmet";
import Header from '../../Navigation/Header';
import Styled from "styled-components";
const Div = Styled.div`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap');

`
const ProductCategories = () => {
  return (
    <>
      <Helmet>
      <link rel="stylesheet" href="../../css/style.css" />

      </Helmet>
      <Header />
      <br />
      <br />
      <Div><h2 style={{fontFamily: "Nunito, sans-serif"}} className="h2 section-title">Our Latest Categories</h2></Div>
    <Category/>
    </>
  )
}

export default ProductCategories