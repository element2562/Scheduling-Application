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
            <div>
                NOICE you booked an appointment with {this.state.doctor.firstName} {this.state.doctor.lastName}
            </div>
        )
    }
}

export default withRouter(ScheduleSuccess)