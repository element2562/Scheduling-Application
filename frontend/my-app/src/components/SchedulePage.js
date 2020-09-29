import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter, useHistory } from "react-router-dom";
import Api from "./ApiCalls";

class SchedulePage extends Component {
    state = {
        validated: true
    };
    
    componentWillMount()
    {
        const { location, history } = this.props;
        this.setState({
            slot: location.state.slot,
            doctor: location.state.doctorInfo,
            history: history
        });
    }

    setValidated = (isValidated) => {
        this.setState({
            validated: isValidated
        })
    };

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.setValidated(true);
    };
    
    bookAppointment = () => {
        Api.CreatePatient(this.state.firstName, this.state.lastName, this.state.dateOfBirth, this.state.phoneNumber, this.state.email)
        .then(res => {
            Api.BookAppointment(this.state.slot.slotId, this.state.slot, this.state.doctor, res)
            .then(() => {
                this.state.history.push({
                    pathname: "/schedule/confirmation/success",
                    state: {
                        slot: this.state.slot,
                        doctor: this.state.doctor
                    }
                })
            })
        })
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
    };

    render()
    {
        let appointmentTime = this.userFriendlyDate(this.state.slot.startTime, this.state.slot.endTime);
        return (
            <div id="appointmentConfirmation">
                <h1>Appointment Confirmation</h1>
                <div className="doctorInfo">
                    <h3>Appointment Information</h3>
                    <p><strong>Time: </strong>{appointmentTime}</p> 
                    <p><strong>Doctor Name: </strong>{this.state.doctor.firstName} {this.state.doctor.lastName}</p>
                    <p><strong>Doctor Gender: </strong>{this.state.doctor.gender}</p>
                    <p><strong>Doctor Specialty: </strong>{this.state.doctor.specialty}</p>
                    <p><strong>Doctor Location: </strong>{this.state.doctor.address}, {this.state.doctor.zip}</p>
                    <p><strong>Doctor Phone Number: </strong>{this.state.doctor.phone}</p>
                </div>
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <div id="patientLineOne">
                        <Form.Group controlId="patientFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required onChange={e => {
                                this.setState({
                                    firstName: e.target.value
                                })
                            }} placeholder="John" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid first name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="patientLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required onChange={e => {
                                this.setState({
                                    lastName: e.target.value
                                })
                            }} placeholder="Doe" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid last name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="patientDOB">
                            <Form.Label>Date of birth</Form.Label>
                            <Form.Control required type="date" onChange={e => {
                                this.setState({
                                    dateOfBirth: e.target.value
                                })
                            }} />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid date of birth.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div id="patientLineTwo">
                        <Form.Group controlId="patientAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control required placeholder="123 Main st City, State Zip" onChange={e => {
                                this.setState({
                                    address: e.target.value
                                })
                            }} />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid address.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="patientPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control required type="tel" placeholder="111-111-1111" onChange={e => {
                                this.setState({
                                    phoneNumber: e.target.value
                                })
                            }} />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid phone number.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="patientEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="testEmail@test.com" onChange={e => {
                                this.setState({
                                    email: e.target.value
                                })
                            }} />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div id="submitAppointmentButton">
                        <Button onClick={this.bookAppointment}>Book Appointment</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default withRouter(SchedulePage);