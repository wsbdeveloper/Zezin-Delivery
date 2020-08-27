import React from "react";

import Home from './../components/Home/Home';

import ProductsHome from '../components/ProductsMain/Products';

import ProductsCategorys from '../components/ProductsCategorys/ProductsCategorys';

import Product from './../components/Product/Product';

import {
    BrowserRouter as Routers,
    Route,
    Switch
} from "react-router-dom";


export default function Router() {
    return (
        <Routers>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/produtos" component={ProductsHome} />
                <Route path="/categoria/:category" component={ProductsCategorys} />
                <Route path="/produto" component={Product} />
            </Switch>
        </Routers>
    );
}