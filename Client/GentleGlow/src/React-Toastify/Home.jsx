import React from 'react'
import { ErrorToast, InfoToast, SuccessToast, WarningToast } from './React_Toasts'

const Home = () => {
  return (
      <>
          <button onClick={() => InfoToast("Plz Fill All Fields" , 2000)}>Click</button>
      </>
  )
}

export default Home