import React, { Component } from "react";
import { I18n } from "react-i18next";
import EventsList from "./EventsList";

class Events extends Component {
    render() {
        return(
            <I18n ns="translations">
            {
                (t) => (
                    <div className="evento">
                        <h2>{t('events.title')} <hr/></h2>

                        <EventsList data = {t('events.array', {returnObjects:true})} />
                    </div>
                )
            }
            </I18n>
        );
    }
}

export default Events;