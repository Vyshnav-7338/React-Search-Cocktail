import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import NavBar from '../Components/NavBar/NavBar'
import AboutUs from '../Pages/About/AboutUs'
import CocktailsDetails from '../Pages/CocktailsDetails/CocktailsDetails'
import NoData from '../Pages/NoDataFound/NoData'
function LatoutRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/React-Search-Cocktail' element={<Home />} />
        <Route path='/*' element={<NoData />} />
        <Route path='/About' element={<AboutUs />} />
        <Route path='/cocktail/:id' element={<CocktailsDetails />} />
      </Routes>
    </Router>
  )
}

export default LatoutRoutes
