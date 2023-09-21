import React from 'react'
import Header from '../../Navigation/Header'
import Services from './Services'
import Category from './Category'
import { Helmet } from "react-helmet";
import Products from './Products';
const HomePage = () => {
  return (
    <>
      <Helmet>
       
    <script src="../../../js/script.js"></script>

      </Helmet>
     <div>
  {/* 
  - #HEADER
*/}
  <Header/>
  <main>
    <article>
      {/* 
- #HERO
    */}
      <section className="hero" id="home" style={{backgroundImage: 'url("/images/banner.png")'}}>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Fashion Everyday</p>
            <h2 className="h1 hero-title">Unrivalled Fashion House</h2>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </section>
      {/* 
- #SERVICE
    */}
      <Services/>
      {/* 
- #CATEGORY
    */}
     <Category/>
      {/* 
- #PRODUCT
    */}
    <section className="section product">
        <div className="container">
          <h2 className="h2 section-title">Products of the week</h2>
          <ul className="filter-list">
            <li>
              <button className="filter-btn  active">Best Seller</button>
            </li>
            <li>
              <button className="filter-btn">Hot Collection</button>
            </li>
            <li>
              <button className="filter-btn">Trendy</button>
            </li>
            <li>
              <button className="filter-btn">New Arrival</button>
            </li>
          </ul>
          <button className="btn btn-outline">View All Products</button>

        </div>
      </section>
      {/* 
- #BLOG
    */}
      <section className="section blog">
        <div className="container">
          <h2 className="h2 section-title">Latest fashion news</h2>
          <ul className="blog-list">
            <li>
              <div className="blog-card">
                <figure className="card-banner" style={{borderRadius : "15px"}}>
                  <a href="#">
                    <img  src="/images/blog-1.jpg" alt="Worthy Cyber Monday Fashion From Casmart" loading="lazy" width={1020} height={700} className="w-100" />
                  </a>
                </figure>
                <div className="card-content">
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="folder-open-outline" />
                      <a href="#" className="card-meta-link">Fashion</a>
                    </li>
                    <li className="card-meta-item">
                      <ion-icon name="time-outline" />
                      <a href="#" className="card-meta-link">
                        <time dateTime="2021-03-31">31 Mar 2021</time>
                      </a>
                    </li>
                  </ul>
                  <h3 className="h3 card-title">
                    <a href="#">Worthy Cyber Monday Fashion From GentleGlow</a>
                  </h3>
                </div>
              </div>
            </li>
            <li>
              <div className="blog-card">
                <figure className="card-banner" style={{borderRadius : "15px"}}>
                  <a href="#">
                    <img src="/images/blog-2.jpg" alt="Holiday Home Decoration I’ve Recently Ordered" loading="lazy" width={1020} height={700} className="w-100" />
                  </a>
                </figure>
                <div className="card-content">
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="folder-open-outline" />
                      <a href="#" className="card-meta-link">Fashion</a>
                    </li>
                    <li className="card-meta-item">
                      <ion-icon name="time-outline" />
                      <a href="#" className="card-meta-link">
                        <time dateTime="2021-03-31">31 Mar 2021</time>
                      </a>
                    </li>
                  </ul>
                  <h3 className="h3 card-title">
                    <a href="#">Holiday Home Decoration I’ve Recently Ordered</a>
                  </h3>
                </div>
              </div>
            </li>
            <li>
              <div className="blog-card">
                <figure className="card-banner" style={{borderRadius : "15px"}}>
                  <a href="#">
                    <img src="/images/blog-3.jpg" alt="Unique Ideas for Fashion You Haven’t heard yet" loading="lazy" width={1020} height={700} className="w-100" />
                  </a>
                </figure>
                <div className="card-content">
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="folder-open-outline" />
                      <a href="#" className="card-meta-link">Fashion</a>
                    </li>
                    <li className="card-meta-item">
                      <ion-icon name="time-outline" />
                      <a href="#" className="card-meta-link">
                        <time dateTime="2021-03-31">31 Mar 2021</time>
                      </a>
                    </li>
                  </ul>
                  <h3 className="h3 card-title">
                    <a href="#">Unique Ideas for Fashion You Haven’t heard yet</a>
                  </h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* 
- #NEWSLETTER
    */}
      <section className="section newsletter">
        <div className="container"  style={{borderRadius : "20px"}}>
          <div className="newsletter-card" style={{backgroundImage: 'url("/images/newsletter-bg.png")'}}>
            <h2 className="card-title">Subscribe Newsletter</h2>
            <p className="card-text">
              Enter your email below to be the first to know about new collections and product launches.
            </p>
            <form action className="card-form">
              <div className="input-wrapper">
                <ion-icon name="mail-outline" />
                <input type="email" name="emal" placeholder="Enter your email" required className="input-field" />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                <span>Subscribe</span>
                <ion-icon name="arrow-forward" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </article>
  </main>
  {/* 
  - #FOOTER
*/}
  <footer className="footer">
    <div className="footer-top">
      <div className="container">
        <div className="footer-brand">
          <a href="#" className="logo">
            <img src="/images/Hsnlogo.png" alt="Casmart logo" style={{height : "78px"}} />
          </a>
          <p className="footer-text">
            GentelGlow is a fashion theme for presents a complete wardrobe of uniquely crafted Ethnic Wear, Casuals, Edgy
            Denims, &amp;
            Accessories inspired from the most contemporary
          </p>
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-pinterest" />
              </a>
            </li>
          </ul>
        </div>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Information</p>
          </li>
          <li>
            <a href="#" className="footer-link">About Company</a>
          </li>
          <li>
            <a href="#" className="footer-link">Payment Type</a>
          </li>
          <li>
            <a href="#" className="footer-link">Awards Winning</a>
          </li>
          <li>
            <a href="#" className="footer-link">World Media Partner</a>
          </li>
          <li>
            <a href="#" className="footer-link">Become an Agent</a>
          </li>
          <li>
            <a href="#" className="footer-link">Refund Policy</a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Category</p>
          </li>
          <li>
            <a href="#" className="footer-link">Handbags &amp; Wallets</a>
          </li>
          <li>
            <a href="#" className="footer-link">Women's Clothing</a>
          </li>
          <li>
            <a href="#" className="footer-link">Plus Sizes</a>
          </li>
          <li>
            <a href="#" className="footer-link">Complete Your Look</a>
          </li>
          <li>
            <a href="#" className="footer-link">Baby Corner</a>
          </li>
          <li>
            <a href="#" className="footer-link">Man &amp; Woman Shoe</a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Help &amp; Support</p>
          </li>
          <li>
            <a href="#" className="footer-link">Dealers &amp; Agents</a>
          </li>
          <li>
            <a href="#" className="footer-link">FAQ Information</a>
          </li>
          <li>
            <a href="#" className="footer-link">Return Policy</a>
          </li>
          <li>
            <a href="#" className="footer-link">Shipping &amp; Delivery</a>
          </li>
          <li>
            <a href="#" className="footer-link">Order Tranking</a>
          </li>
          <li>
            <a href="#" className="footer-link">List of Shops</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p className="copyright">
          © 2023 <a href="#">Muhammad-ul-Bakir Jamali</a>. All Rights Reserved
        </p>
        <ul className="footer-bottom-list">
          <li>
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="footer-bottom-link">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="#" className="footer-bottom-link">Sitemap</a>
          </li>
        </ul>
        <div className="payment">
          <p className="payment-title">We Support</p>
          <img src="/images/payment-img.png" alt="Online payment logos" className="payment-img" />
        </div>
      </div>
    </div>
  </footer>
</div>

      </>
  )
}

export default HomePage