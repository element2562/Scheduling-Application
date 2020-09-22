import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/Navbar"
import MainPage from "./components/MainPage";
import Schedule from "./components/Schedule";

export default class extends Component {

    render()
    {
        return(
            <React.Fragment>
            <Route path="/" render={() => 
                <NavBar />} 
            />
            <Route exact path="/" render={() =>
                <MainPage />}
            />
            <Route path="/schedule" render={() =>
                <Schedule />}
            />
            </React.Fragment>
        )
    }

}