import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class SchedulePage extends Component {
    state = {
        slot: {}
    }
    
    render()
    {
        const { location } = this.props
        console.log(location);
        console.log(location.state.doctorInfo)
        return (
            <div id="appointmentConfirmation">
                <h1>Appointment Confirmation</h1>
                <div className="doctorInfo">
                    <h3>Provider Info</h3>
                    <strong>Provider name: </strong>{location.state.doctorInfo.firstName} {location.state.doctorInfo.lastName}
                </div>
            </div>
        )
    }
}

export default withRouter(SchedulePage);