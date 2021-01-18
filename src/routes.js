import React from "react";

import {BrowserRouter, Switch ,Route}  from "react-router-dom";

import Main from "./pages/main";
import User from "./pages/user";

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact={true} path  = "/" component = {Main}/>
            <Route exact={true} path = "/users/:id" component = {User}/>
        </Switch>
    </BrowserRouter>

);

export default Routes;