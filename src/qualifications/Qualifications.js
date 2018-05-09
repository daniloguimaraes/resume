import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import QualificationsList from "./QualificationsList";

class Qualifications extends Component {

    render() {
        return(
            <I18n ns="translations"> 
            {
                (t) => (
                    <div>
                        <h2>{t('qualifications.title')} <hr/></h2>

                        <QualificationsList data = {t('qualifications.array', {returnObjects:true})} />
                    </div> 
                )
            }
            </I18n>
        );
    }

}

export default Qualifications;