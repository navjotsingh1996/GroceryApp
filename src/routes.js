import React from 'react';
import { Router, Route } from "react-router";
import App from "./App";
import Home from "./pages/home/home";
import ListView from "./pages/listView/listView";

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App} >
            < Route path="/listView" component={ListView} />
            < Route path="*" component={Home} />
        </Route>
    </Router>
);

export default Routes;