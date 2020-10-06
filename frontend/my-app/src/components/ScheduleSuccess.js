import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ScheduleSuccess extends Component {
    state = {
        slot: {},
        doctor: {}
    }
    
    componentWillMount()
    {
        const { location } = this.props
        this.setState({
            slot: location.state.slot,
            doctor: location.state.doctor
        })
        console.log(this.state);
    }

    render()
    {
        return(
            <div className="successDiv">
                <h1>Appointment Booked!</h1>
                <p>You have successfully booked your appointment with {this.state.doctor.firstName} {this.state.doctor.lastName}</p>
                <p>Make sure to arrive 15 minutes early from {this.state.slot.startTime}</p>
            </div>
        )
    }
}

export default withRouter(ScheduleSuccess)