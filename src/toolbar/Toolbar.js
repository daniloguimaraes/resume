import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { I18n } from 'react-i18next';

class Toolbar extends Component {

    render() {
        return (
            <I18n ns="translations"> 
            {
                (t, { i18n }) => (
                    <div className="toolbar" id="toolbar">
                        <Button onClick={() => window.print()}> {t('general.print')} </Button>
                        <Button onClick={() => i18n.changeLanguage('pt-BR')}>pt-BR</Button>
                        <Button onClick={() => i18n.changeLanguage('en')}>en</Button>
                    </div>
                )
            }
            </I18n>
        )
    }
}

export default Toolbar;