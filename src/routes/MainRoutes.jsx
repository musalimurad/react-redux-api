import React from 'react'
import {Routes, Route} from 'react-router-dom' 
import Layout from '../components/Layout'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'



const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index path='/' element={<HomePage/>}/>
        <Route  path='products' element={<ProductPage/>}/>
        <Route  path='about' element={<AboutPage/>}/>
        <Route  path='contact' element={<ContactPage/>}/>
      </Route>
    </Routes>
  )
}

export default MainRoutes
