import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProductIndex from '../components/products/Index';
import NewProduct from '../components/products/New'
import NotFound from '../components/NotFound';


const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <ProductIndex /> } />
                <Route path="/product/new" element={ <NewProduct /> } />
                <Route path="/*" element={ <NotFound /> } />
            </Routes>
        </div>
    )
}

export default Router