import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from "../../Pages/HomePage/HomePage";
import Header from "../Header/Header";
import ProductsPage from "../../Pages/ProductsPage/ProductsPage";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import TestPages from "../../Pages/testPages/TestPages";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/products' element={<ProductsPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
