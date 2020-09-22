import React, { Component } from "react";
import EachProvider from "./EachProvider";
import { Row } from "react-bootstrap";
import Api from "./ApiCalls";
export default class Schedule extends Component {
    state = {
        doctors: []
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
            console.log(this.state.doctors + " test")
        })
    }
    render(){
        return(
            <div className="providers">
            <h1>Schedule</h1>
            <Row>
            {this.state.doctors.map((doctor, index) => (
                <EachProvider doctor={doctor} key={index} />
            ))}
            </Row>
            </div>
        )
    }
}