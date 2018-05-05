import React, { Component } from 'react';
import { I18n, Trans } from 'react-i18next';

class Education extends Component {


    render() {
        return (
            <I18n ns="translations"> 
            {
             (t, { i18n }) => (
                <div>
                <h2>{t('education.title')}</h2>

                  <ul>
                    <li><b>2009-2014</b>: {t('education.graduation.title')}, <a href="https://www.ufg.br/"><Trans i18nKey="education.graduation.institution"></Trans></a>.</li>
                  
                    <li><b>2016-2017</b>: {t('education.postGraduation.title')}, <a href="http://www.unialfa.com.br"><Trans i18nKey="education.postGraduation.institution"></Trans></a>.</li>
                  </ul>
              </div>
            )
            }
            </I18n>
            
        );
    }
}

export default Education;