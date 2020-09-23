import React, { Component } from "react";
import EachProvider from "./EachProvider";
import { Row } from "react-bootstrap";
import Api from "./ApiCalls";
export default class Schedule extends Component {
    state = {
        doctors: [],
        slots: []
    }

    componentDidMount()
    {
        Api.GetDoctors()
        .then(res => {
            this.setState(
                {
                    doctors: res
                }
            )
            console.log(this.state.doctors);
        })
        Api.GetAvailableSlots(1)
        .then(res => {
            this.setState({
                slots: res
            })
        })
    }

    filterSlots = (slots, idDoctor) => {
        let filteredSlots = slots.filter(slot => slot.idDoctor === idDoctor);
        return filteredSlots
    }

    render(){
        return(
            <div className="providers">
            <h1>Schedule</h1>
            <Row>
            {this.state.doctors.map(doctor => (
                <EachProvider doctor={doctor} key={doctor.doctorId} slots={this.state.slots} filterSlots={this.filterSlots} />
            ))}
            </Row>
            </div>
        )
    }
}