import React, { Component } from "react";
import ApplicationViews from "../ApplicationViews";
export default class extends Component {
    state = {
        name: "TestName"
    }

    render()
    {
        return(
            <React.Fragment>
                <ApplicationViews />
            </React.Fragment>
        )
    }
}