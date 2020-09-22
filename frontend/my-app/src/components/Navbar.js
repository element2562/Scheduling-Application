import React, { Component } from "react";
import { Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

export default class extends Component {
    render()
    {
        return(
            <React.Fragment>
            <Navbar>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
                <Navbar.Brand>
                    <Link to="/schedule">Schedule Appointment</Link>
                </Navbar.Brand>   
            </Navbar>
            </React.Fragment>
        )
    }
}