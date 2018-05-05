import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { I18n } from 'react-i18next';
import Education from './education/Education.js';
import Professional from './professional/Professional.js';

import logo from './logo.svg';
import Typography from "typography";
import moragaTheme from "typography-theme-moraga";
import WebFont from "webfontloader";
import './App.css';

WebFont.load({
  google: {
    families: ["Source Sans Pro", "sans-serif"]
  }
});

moragaTheme.baseFontSize = "18px";
moragaTheme.baseLineHeight = 1.56;
moragaTheme.baseScaleRatio = 2;
moragaTheme.headerWeight = 200;
moragaTheme.headerGrayValue = "15%";
moragaTheme.bodyWeight = 400;
moragaTheme.bodyBoldWeight = 700;
moragaTheme.bodyGray = "30%";

const typography = new Typography(moragaTheme);

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();

class App extends Component {
  render() {
    

    return (
      <I18n ns="translations">
        {
          (t, { i18n }) => (
            <div className="App">

              <p className="printOnly">
                {t('general.print')}: https://daniloguimaraes.github.io/resume
              </p>

              <div class="language-bar">
                <Button onClick={() => i18n.changeLanguage('pt-BR')}>pt-BR</Button>
                <Button onClick={() => i18n.changeLanguage('en')}>en</Button>
              </div>

              <h1>Danilo Guimarães Justino Lemes</h1>

              

              <blockquote>
                <p>
                  {t('personal.address.title')} {t('')} 
                  <br/>
                  E-mail: <a href="mailto:guimaraes.djl@gmail.com">guimaraes.djl@gmail.com</a> 
                  <br/>
                  Github: <a href="https://github.com/daniloguimaraes">daniloguimaraes</a>
                  <br/>
                  LinkedIn: <a href="">Danilo Guimarães</a>
                </p>
              </blockquote>
             
              <img src={logo} className="App-logo" alt="logo" />
 

              <Education i18n = {i18n}/>
            
              <br/>

              <Professional i18n = {i18n} />

              <br/>
             
              <div>
                <h2>{t('qualifications.title')}</h2>
                
                <ul>
                  <li>{t('qualifications.props.0')}</li>
                  <li>{t('qualifications.props.1')}</li>

                </ul>
              </div>  
             
              
            </div>
          )
        }
      </I18n>
    );
  }
}

export default App;
