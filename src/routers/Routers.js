import React from "react";

import Home from './../components/Home/Home';

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
            </Switch>
        </Routers>
    );
}