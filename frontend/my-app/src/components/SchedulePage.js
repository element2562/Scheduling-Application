import React, { Component, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
class SchedulePage extends Component {
    state = {
        slot: {},
        validated: true
    }
    
    setValidated = (isValidated) => {
        this.setState({
            validated: isValidated
        })
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        this.setValidated(true);
    };
    

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
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <div id="patientLineOne">
                        <Form.Group controlId="patientFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required placeholder="John" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid first name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="patientLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required placeholder="Doe" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid last name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="patientDOB">
                            <Form.Label>Date of birth</Form.Label>
                            <Form.Control required type="date" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid date of birth.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div id="patientLineTwo">
                        <Form.Group controlId="patientAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control required placeholder="123 Main st City, State Zip" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid address.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="patientAddress">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control required type="tel" placeholder="111-111-1111" isInvalid="test" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid phone number.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="patientEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="testEmail@test.com" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div id="submitAppointmentButton">
                        <Button>Book Appointment</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default withRouter(SchedulePage);