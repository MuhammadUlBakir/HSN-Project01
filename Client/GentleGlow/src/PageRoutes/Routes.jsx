import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import UserAuth from '../Auth/UserAuth'
import VerifyOtp from '../Auth/VerifyOtp'
import ForgetPass from '../Auth/ForgetPass'
import HomePage from '../Pages/HomePage/HomePage'
import Checkout from '../Pages/Checkout/Checkout'
import ProductCategories from '../Pages/Category/Categories'
import ViewProducts from '../Pages/Products/ViewProducts'
import Contact from '../Pages/ContactUs/Contact'
import Tracking from '../Pages/ProductTracking/Tracking'
import Tracking2 from '../Pages/ProductTracking/Tracking2'

const Routess = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element = {<HomePage/>}/>
                    <Route path='/auth' element={<UserAuth />} /> 
                    <Route path='/verifyotp' element={<VerifyOtp />} />
                    <Route path='/forgetpass' element={<ForgetPass />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/category' element={<ProductCategories />} />
                    <Route path='/product/:pname' element={<ViewProducts />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/tracking' element={<Tracking />} />
                    <Route path='/tracking2/:id' element = {<Tracking2/>}/>
            </Routes>
            </BrowserRouter>
        </>
  )
}

export default Routess