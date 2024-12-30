// import { useState } from 'react'
import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/navbar'
import RestaurantsList from './components/ResturantList/ResturantList'
import RestaurantCard from './components/ResturantCard/ResturantCard'
import Footer from './components/FooterSection/footer'

function App() {
 
  return (
    <>
    <Navbar/>
    <RestaurantsList />
  <RestaurantCard />
    <Footer />
    </>
  )
}

export default App
