import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/Navbar"
import MainPage from "./components/MainPage";
import Schedule from "./components/Schedule";
import SchedulePage from "./components/SchedulePage";

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
            <Route exact path="/schedule" render={() =>
                <Schedule />}
            />
            <Route exact path="/schedule/confirmation" render={() =>
                <SchedulePage />}
            />
            </React.Fragment>
        )
    }

}