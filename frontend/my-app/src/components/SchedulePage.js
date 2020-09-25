import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";
class SchedulePage extends Component {
    state = {
        slot: {}
    }
    userFriendlyDate = (startTime, endTime) => {
        let startTimeArr = startTime.split("T");
        let date = startTimeArr[0];
        let formattedStartTime = startTimeArr[1];
        let formattedEndTime = endTime.split("T")[1];
        if(formattedStartTime[0] === "0"){
            formattedStartTime = formattedStartTime.slice(1);
        }
        if(formattedEndTime[0] === "0"){
            formattedEndTime = formattedEndTime.slice(1);
        }
        return `${date} ${formattedStartTime}-${formattedEndTime}`;
    }
    render()
    {
        const { location } = this.props;
        let doctor = location.state.doctorInfo;
        let slot = location.state.slot;
        let appointmentTime = this.userFriendlyDate(slot.startTime, slot.endTime);
        return (
            <div id="appointmentConfirmation">
                <h1>Appointment Confirmation</h1>
                <div className="doctorInfo">
                    <h3>Appointment Information</h3>
                    <p><strong>Time: </strong>{appointmentTime}</p>
                    <p><strong>Doctor Name: </strong>{doctor.firstName} {doctor.lastName}</p>
                    <p><strong>Doctor Gender: </strong>{doctor.gender}</p>
                    <p><strong>Doctor Specialty: </strong>{doctor.specialty}</p>
                    <p><strong>Doctor Location: </strong>{doctor.address}, {doctor.zip}</p>
                    <p><strong>Doctor Phone Number: </strong>{doctor.phone}</p>
                </div>
                <Form>
                    <Form.Group controlId="patientFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="John" />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default withRouter(SchedulePage);