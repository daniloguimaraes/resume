import React, { Component } from 'react';
import { I18n } from 'react-i18next';

class Qualifications extends Component {

    render() {
        return(
            <I18n ns="translations"> 
            {
                (t, { i18n }) => (
                    <div>
                    <h2>{t('qualifications.title')}</h2>
                    
                    <ul>
                    <li>{t('qualifications.props.0')}</li>
                    <li>{t('qualifications.props.1')}</li>
                    </ul>

                    </div> 
                ) 
            }
            </I18n>
        );
    }

}

export default Qualifications;