import React, { Component } from "react";
import { I18n } from 'react-i18next';
import ReferenceList from "./ReferenceList";

class References extends Component {
  render() {
    return (
      <I18n ns="translations">
        {t => (
          <div>
            <h2>
              {t("references.title")} <hr />
            </h2>
            <ReferenceList data={t("references.array", {returnObjects : true})} />
          </div>
        )}
      </I18n>
    );
  }
}

export default References;
