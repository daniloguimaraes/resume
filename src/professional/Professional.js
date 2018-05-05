import React, { Component } from 'react';
import { I18n } from 'react-i18next';

class Professional extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <I18n ns="translations"> 
            {
                (t, { i18n }) => (
                    <div>
                    <h2>{t('professional.title')}</h2>
    
                      <blockquote>
                        <p>
                          Hello. It's me
                          <br/>
    
                          
                        </p>
                      </blockquote>  
                      Oobj
                      
                  </div>
                )
            }
            </I18n>
        );
    }

}

export default Professional;