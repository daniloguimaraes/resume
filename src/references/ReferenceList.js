import React, { Component } from "react";
import { I18n } from 'react-i18next';

class ReferenceList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
        <I18n ns="translations">
        {t =>
            <ul>
            {this.props.data.map(function(reference, index) {

            let content = `<p>
                <a href="${reference.linkedinProfileURI}">${reference.name}</a>, ${reference.role} - ${reference.company}
                </p>

                <p>
                ${t('general.phone')}: ${reference.phone}
                <br />
                E-mail: <a href="mailto:${reference.email}"> ${reference.email}</a>
                </p>`;

            

            return (
                <li key={index} dangerouslySetInnerHTML={{ __html: content }} />
            );
            })}
        </ul>
      }
      </I18n>
    );
  }
}

export default ReferenceList;
