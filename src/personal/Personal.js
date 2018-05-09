import React, { Component } from "react";
import { I18n } from "react-i18next";
import logo from '../logo.svg';

class Personal extends Component {

    render() {
        return(
            <I18n ns="translations">
            {
                (t) => (
                    <div className="personal">
                        <h1>{t('personal.name')}</h1>

                        <blockquote>
                            <p>
                            {t('personal.address.title')}
                            <br/>
                            E-mail: <a href="mailto:guimaraes.djl@gmail.com">guimaraes.djl@gmail.com</a> 
                            <br/>
                            Github: <a href="https://github.com/daniloguimaraes">daniloguimaraes</a>
                            <br/>
                            LinkedIn: <a href="">Danilo Guimarães</a>
                            </p>
                        </blockquote>
                    
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                )
            }
            </I18n>
        )
    }
}

export default Personal;