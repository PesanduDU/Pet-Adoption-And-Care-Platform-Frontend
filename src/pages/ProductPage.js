import React from 'react'
import Header from '../components/Header'
import Products from '../components/Cart'
import Cart from '../components/Cart'
import LastFooter from '../components/LastFooter'
import FirstFooter from '../components/FirstFooter'

function ProductPage() {
  return (
    <>
        <Header/>
        <Cart/>
        <LastFooter/>
        <FirstFooter/>
    </>
  )
}

export default ProductPage