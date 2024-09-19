import React from 'react'
import Header from './components/headerSection/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout