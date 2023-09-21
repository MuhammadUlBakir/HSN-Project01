import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Styled from "styled-components";

const Div = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap');
`;

const Products = ({ category }) => {
  const [data, setData] = useState([]);
  const [loading, Setloading] = useState(false);
  const handleAddToCart = (product) => {
    // alert(product._id)
    // Retrieve existing cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('GentleGlow1')) || [];
    let updatedCartItems = [];

    // Check if the product is already in the cart
    let found = false;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i]._id === product._id) {
        // Product already in cart, update quantity
        cartItems[i].quantity += 1;
        found = true;
      }
      updatedCartItems.push(cartItems[i]);
    }

    // If the product is not in the cart, add it with quantity 1
    if (!found) {
      updatedCartItems.push({ ...product, quantity: 1 });
    }

    // Save the updated cart items to local storage
    localStorage.setItem('GentleGlow1', JSON.stringify(updatedCartItems));
  };

  const SelectedProducts = async () => {
    try {
      Setloading(true)
      const products = await axios.get("/api/readproduct");
      const filterProducts = products.data.Product.filter(elm => elm.ProductCategory === category);
      Setloading(false)
      setData(filterProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    SelectedProducts();
  }, []);

  return (
    <>
      {loading === false ? <><ul className="product-list" style={{ marginLeft: "50px" }}>
        {data.map((elm, ind) => (
          <li key={elm.id}>
            <div className="product-card">
              <figure className="card-banner">
              <a href="#">
                                      <div style={{height : "300px"}}>
                                      <img style={{width : "400px"}} src={elm.ProductImage} alt="Varsi Leather Bag" loading="lazy"  className="w-100" />
                                                 </div>
                  </a>
                  <div className="card-badge red"> -25%</div>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn" onClick={() => handleAddToCart(elm)}>
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                                        <p>Add to Cart</p>
                    </button>
                    <button className="card-action-btn" aria-label="Add to Whishlist">
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
              </figure>
              <Div>
                <div className="card-content" style={{ fontFamily: "Nunito, sans-serif" }}>
                  <h3 className="h4 card-title" style={{ fontWeight: "bolder", fontSize: "20px" }}>
                    <a href="#">{elm.ProductName}</a>
                  </h3>
                  <div className="card-price">
                    <data value="48.75">£48.75</data>
                    <data value={65.00}>£65.00</data>
                  </div>
                </div>
              </Div>
              {/* <button
                className="card-action-btn cart-btn"
                aria-label="Add to Cart"
                onClick={() =>}
              >
                <ion-icon name="bag-handle-outline" aria-hidden="true" />
                <p>Add to Cart</p>
              </button> */}
            </div>
          </li>
        ))}
      </ul></> : <><img style={{marginLeft : "950px"}} src="/images/loader.gif" alt="" /><br/><br/></>}
    </>
  );
};

export default Products;
