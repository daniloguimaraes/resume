import React, { Component } from 'react';
import {I18n} from 'react-i18next';

class Goals extends Component {

    render() {
        return(
            <I18n ns="translations">
            {
                (t) => (
                    <div>
                        <h2>{t('goals.title')} <hr/></h2>

                        <p>{t('goals.description')}</p>
                    </div>
                )
            }
            </I18n>
        )
    }
}

export default Goals;