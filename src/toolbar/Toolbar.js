import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { I18n } from 'react-i18next';
import qrCode from "../qr-code.gif";


class Toolbar extends Component {

    render() {
        return (
            <I18n ns="translations"> 
            {
                (t, { i18n }) => (
                    <div>
                        <div className="printOnly" id="divThisResumeCanBeFound">
                            
                                {t('general.thisResumeCanBeFound')}:
                                <br/>
                                https://daniloguimaraes.github.io/resume

                                <img src={qrCode} className="QRCode" alt="qrCode" />
                            
                        </div>

                        <div className="toolbar" id="toolbar">
                            <Button onClick={() => window.print()}> {t('general.print')} </Button>
                            <Button onClick={() => i18n.changeLanguage('pt-BR')}><span class="flag-icon flag-icon-br"></span></Button>
                            <Button onClick={() => i18n.changeLanguage('en')}><span class="flag-icon flag-icon-gb"></span></Button>
                        </div>
                    </div>
                )
            }
            </I18n>
        )
    }
}

export default Toolbar;