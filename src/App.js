import React, { Component } from 'react';
import { I18n, Trans } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <I18n ns="translations">
        {
          (t, { i18n }) => (
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>{t('education.title')}</h2>
                <button onClick={() => i18n.changeLanguage('pt-BR')}>pt-BR</button>
                <button onClick={() => i18n.changeLanguage('en')}>en</button>
              </div>
              <div className="App-intro">
                <Trans i18nKey="education.ufg">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </Trans>
              </div>
              <div>{t('description.part2')}</div>
            </div>
          )
        }
      </I18n>
    );
  }
}

export default App;
