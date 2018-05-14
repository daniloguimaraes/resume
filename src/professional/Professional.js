import React, { Component } from "react";
import { I18n } from "react-i18next";
import Experience from "./Experience";

class Professional extends Component {
  render() {
    return (
      <I18n ns="translations">
        {(t, { i18n }) => (
          <div>
            <h2>
              {t("professional.title")} <hr />
            </h2>

            <Experience
              data={t("professional.experiences", { returnObjects: true })}
            />
          </div>
        )}
      </I18n>
    );
  }
}

export default Professional;
