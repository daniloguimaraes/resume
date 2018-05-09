import React, { Component } from "react";

class EventsList extends Component {

    render() {
        return(
            <ul>
                {
                    this.props.data.map(function(qualification, index) {
                        return <li key={index} dangerouslySetInnerHTML={{__html: qualification}}></li>
                    })
                }
            </ul>
        );
    }
}

export default EventsList;