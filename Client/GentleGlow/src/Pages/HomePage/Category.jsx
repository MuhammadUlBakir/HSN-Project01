import Cookies from 'js-cookie';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Category = () => {
  const navigate = useNavigate();
  const token = Cookies.get("Usertoken2");
  //-----------------------
  const Redirect = async (val) => {
    try {
      if (!token) {
        navigate("/auth");
      } else {
        navigate(val);

      }  
    } catch (error) {
      console.log(error);
    }
  };
  return (
      <>
       <section className="section category">
        <div className="container">
          <ul className="category-list">
            <li className="category-item" >
              <figure className="category-banner" style={{borderRadius : "16px"}}>
                <img src="/images/category-1.jpg" alt="Sunglass & eye" loading="lazy"  width={510} height={600} className="w-100" />
              </figure>
              <a onClick={() => Redirect("/product/Sunglasses")}  className="btn btn-secondary">Sunglass &amp; Eye</a>
            </li>
            <li className="category-item">
              <figure className="category-banner" style={{borderRadius : "16px"}}>
                <img src="/images/category-2.jpg" alt="Active & outdoor" loading="lazy" width={510} height={600} className="w-100" />
              </figure>
              <a onClick={() => Redirect("/product/Active Wear")}  className="btn btn-secondary">Active &amp; Outdoor</a>
            </li>
            <li className="category-item">
              <figure className="category-banner" style={{borderRadius : "16px"}}>
                <img src="/images/category-3.jpg" alt="Winter Wear" loading="lazy" width={510} height={600} className="w-100" />
              </figure>
              <a onClick={() => Redirect("/product/Winter Wear")} className="btn btn-secondary">Winter Wear</a>
            </li>
            <li className="category-item">
              <figure className="category-banner" style={{borderRadius : "16px"}} >
                <img src="/images/category-4.jpg" alt="Exclusive footwear" loading="lazy" width={510} height={600} className="w-100" />
              </figure>
              <a onClick={() => Redirect("/product/FootWear")}  className="btn btn-secondary">Exclusive Footwear</a>
            </li>
            <li className="category-item">
              <figure className="category-banner" style={{borderRadius : "16px"}}>
                <img src="/images/category-5.jpg" alt="Jewelry" loading="lazy" width={510} height={600} className="w-100" />
              </figure>
              <a onClick={() => Redirect("/product/jewelry")}  className="btn btn-secondary">Jewelry</a>
            </li>
            <li className="category-item">
              <figure className="category-banner" style={{borderRadius : "16px"}}>
                <img src="/images/category-6.jpg" alt="Sports cap" loading="lazy" width={510} height={600} className="w-100" />
              </figure>
              <a onClick={() => Redirect("/product/Sports Cap")}  className="btn btn-secondary">Sports Cap</a>
            </li>
          </ul>
        </div>
      </section>
      </>
  )
}

export default Category