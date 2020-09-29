import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/Navbar"
import MainPage from "./components/MainPage";
import Schedule from "./components/Schedule";
import SchedulePage from "./components/SchedulePage";
import ScheduleSuccess from "./components/ScheduleSuccess";

export default class ApplicationViews extends Component {
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
            <Route exact path="/schedule/confirmation/success" render={() =>
                <ScheduleSuccess />}
            />
            </React.Fragment>
        )
    }

}