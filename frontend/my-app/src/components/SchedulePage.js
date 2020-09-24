import React, { Component } from "react";
import { useLocation } from "react-router-dom";
export default class SchedulePage extends Component {
    state = {
        slot: {}
    }
    componentDidMount()
    {
        const location = useLocation();
        this.setState({
            slot: location.state
        })
    }
    
    render()
    {
        return (
            <h1>{this.state.slot.startTime}</h1>
        )
    }
}