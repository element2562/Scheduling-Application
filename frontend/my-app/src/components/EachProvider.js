import React from "react";
import ReactDom from "react-dom"
import { Card, Modal } from "react-bootstrap"
export default props => {
    let show = false;

    const handleShow = () => show = true;

    const handleClose = () => show = false;

    let image = "data:image/jpeg;base64,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"

    if(props.doctor.gender === "Male")
    {
        image = "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg"
    }

    let slots = props.filterSlots(props.slots, props.doctor.doctorId).sort((a, b) => b.startTime - a.starttime);

    return(
        <React.Fragment>
        <Card className="eachProviderDiv">
            <Card.Img className="providerImage" variant="top" src={image} />
            <div className="doctorInfoDiv">
            <h2 className="doctorInfo">{props.doctor.firstName} {props.doctor.lastName}</h2>
            <h5 className="doctorInfo">{props.doctor.specialty}</h5>
            </div>
            <div className="slotContainer">
            <h3>Available appointments</h3>
            {slots.length > 0 ? slots.map((slot, index) => (
                <React.Fragment>
                <a className="eachSlot" key={index} onClick={handleShow}>{slot.startTime}</a>
                <Modal show={show} onHide={handleClose}>
                    test
                </Modal>
                </React.Fragment>
            )) : <p>Sorry! This provider has no available slots.</p>}
            </div>
        </Card>
        </React.Fragment>
    )
}