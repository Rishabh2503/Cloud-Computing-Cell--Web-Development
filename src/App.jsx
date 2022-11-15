import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Activities from "./Activities";
import Team from "./Team";
import Contac from "./Contac";

import {Switch,Route,Redirect} from "react-router-dom";



const App =() => {

    return (
        <>
    
        <Switch>
            <Route exact path = "/" component ={Home} />
            <Route exact path = "/activities" component ={Activities} />
            <Route exact path = "/team" component ={Team} />
            <Route exact path = "/Call" component ={Contac} />
            <Redirect to="/" />
        </Switch>
        </>
    )
}
export default App;