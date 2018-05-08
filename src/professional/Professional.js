import React, { Component } from 'react';
import { I18n } from 'react-i18next';

class Professional extends Component {

    render() {
        return(
            <I18n ns="translations"> 
            {
                (t, { i18n }) => (
                    <div>
                    <h2>{t('professional.title')} <hr/></h2>
    
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