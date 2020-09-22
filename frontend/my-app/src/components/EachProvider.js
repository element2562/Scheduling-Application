import React from "react";
import { Card } from "react-bootstrap"
export default props => {
    return(
        <Card>
            <Card.Title>{props.doctor.FirstName} {props.doctor.LastName}</Card.Title>
            <Card.Text>{props.doctor.Specialty}</Card.Text>
        </Card>
    )
}