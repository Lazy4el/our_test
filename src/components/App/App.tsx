import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from "../../Pages/HomePage/HomePage";
import Header from "../Header/Header";
import ProductsPage from "../../Pages/ProductsPage/ProductsPage";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
    <div className='wrapper'>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/products' element={<ProductsPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
        </Routes>
        <Footer/>
        </div>
    </div>
  );
}

export default App;
