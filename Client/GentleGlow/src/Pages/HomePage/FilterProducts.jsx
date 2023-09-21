import React from 'react'

const TopWeekProducts = () => {
  return (
      <>
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
          <ul className="product-list">
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="#">
                    <img src="/images/product-1.jpg" alt="Varsi Leather Bag" loading="lazy" width={800} height={1034} className="w-100" />
                  </a>
                  <div className="card-badge red"> -25%</div>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button className="card-action-btn" aria-label="Add to Whishlist">
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="#">Varsi Leather Bag</a>
                  </h3>
                  <div className="card-price">
                    <data value="48.75">£48.75</data>
                    <data value={65.00}>£65.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="#">
                    <img src="/images/product-2.jpg" alt="Fit Twill Shirt for Woman" loading="lazy" width={800} height={1034} className="w-100" />
                  </a>
                  <div className="card-badge green"> New</div>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button className="card-action-btn" aria-label="Add to Whishlist">
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="#">Fit Twill Shirt for Woman</a>
                  </h3>
                  <div className="card-price">
                    <data value={62.00}>£62.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="#">
                    <img src="/images/product-3.jpg" alt="Grand Atlantic Chukka Boots" loading="lazy" width={800} height={1034} className="w-100" />
                  </a>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button className="card-action-btn" aria-label="Add to Whishlist">
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="#">Grand Atlantic Chukka Boots</a>
                  </h3>
                  <div className="card-price">
                    <data value={32.00}>£32.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="#">
                    <img src="/images/product-4.jpg" alt="Women's Faux-Trim Shirt" loading="lazy" width={800} height={1034} className="w-100" />
                  </a>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button className="card-action-btn" aria-label="Add to Whishlist">
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="#">Women's Faux-Trim Shirt</a>
                  </h3>
                  <div className="card-price">
                    <data value={84.00}>£84.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="#">
                    <img src="/images/product-5.jpg" alt="Soft Touch Interlock Polo" loading="lazy" width={800} height={1034} className="w-100" />
                  </a>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button className="card-action-btn" aria-label="Add to Whishlist">
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="#">Soft Touch Interlock Polo</a>
                  </h3>
                  <div className="card-price">
                    <data value={45.00}>£45.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="#">
                    <img src="/images/product-6.jpg" alt="Casmart Smart Watch" loading="lazy" width={800} height={1034} className="w-100" />
                  </a>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button className="card-action-btn" aria-label="Add to Whishlist">
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="#">Casmart Smart Watch</a>
                  </h3>
                  <div className="card-price">
                    <data value={30.00}>£30.00</data>
                    <data value={38.00}>£38.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="#">
                    <img src="/images/product-7.jpg" alt="Casmart Smart Glass" loading="lazy" width={800} height={1034} className="w-100" />
                  </a>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button className="card-action-btn" aria-label="Add to Whishlist">
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="#">Casmart Smart Glass</a>
                  </h3>
                  <div className="card-price">
                    <data value={25.00}>£25.00</data>
                    <data value={39.00}>£39.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="#">
                    <img src="/images/product-8.jpg" alt="Cotton Shirt for Men" loading="lazy" width={800} height={1034} className="w-100" />
                  </a>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button className="card-action-btn" aria-label="Add to Whishlist">
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="#">Cotton Shirt for Men</a>
                  </h3>
                  <div className="card-price">
                    <data value={85.00}>£85.00</data>
                    <data value={99.00}>£99.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="#">
                    <img src="/images/product-9.jpg" alt="Double-breasted Blazer" loading="lazy" width={800} height={1034} className="w-100" />
                  </a>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button className="card-action-btn" aria-label="Add to Whishlist">
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="#">Double-breasted Blazer</a>
                  </h3>
                  <div className="card-price">
                    <data value={32.00}>£32.00</data>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="#">
                    <img src="/images/product-10.jpg" alt="Ribbed Cotton Bodysuits" loading="lazy" width={800} height={1034} className="w-100" />
                  </a>
                  <div className="card-badge green">New</div>
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="card-action-btn cart-btn">
                      <ion-icon name="bag-handle-outline" aria-hidden="true" />
                      <p>Add to Cart</p>
                    </button>
                    <button className="card-action-btn" aria-label="Add to Whishlist">
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="#">Ribbed Cotton Bodysuits</a>
                  </h3>
                  <div className="card-price">
                    <data value={71.00}>£71.00</data>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <button className="btn btn-outline">View All Products</button>
        </div>
      </section>
      </>
  )
}

export default TopWeekProducts