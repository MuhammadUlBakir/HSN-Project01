import React from 'react'
import Category from '../HomePage/Category'
import { Helmet } from "react-helmet";
import Header from '../../Navigation/Header';
import Styled from "styled-components";
import Products from '../HomePage/Products';
import { useParams } from 'react-router-dom';
const Div = Styled.div`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap');

`
const ViewProducts = () => {
    const { pname } = useParams();
  return (
    <>
      <Helmet>
      <link rel="stylesheet" href="../../css/style.css" />

      </Helmet>
      <Header />
      <br />
     <br />
          <Div><h2 style={{ fontFamily: "Nunito, sans-serif" }} className="h2 section-title">Our Latest {pname} Products</h2></Div>
          <div style={{height : "100px" , marginTop : "100px"}}>
        <Products category = {pname} />
              <button style={{marginLeft : "850px"}} className="btn btn-outline">View All Products</button>

   </div>
    </>
  )
}

export default ViewProducts